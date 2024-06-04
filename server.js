const express = require('express');

const path = require('path')

const StringDecoder = require("string_decoder").StringDecoder

const session = require('express-session');

const cookieParser = require('cookie-parser');

const bycrypt = require('bcrypt');

const cron = require('node-cron');

const Pool = require('pg').Pool;

const db = {
    user:'postgres',
    host:'localhost',
    database:'db498',
    password:'DEMO498',
    port:5432
};

const pool = new Pool(db);

const app = express();


//Middlware
app.use(express.json()); 
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
//app.engine('html', require('ejs').renderFile);
app.use(cookieParser());


//Sessions
app.use(session({
    key: 'user_sid',
    secret:'This is my secret message',
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60000000000
    }
}));
app.locals.login = false;

//Serve the login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

//Serve the home page
app.get('/mainweb', (req, res) => {
    res.sendFile(__dirname + '/public/mainweb.html');
});



//Login, Logout, and Create account functionality
app.post('/login', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let useremail = req.body.useremail;
    let userpassword = req.body.password;
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let loginquery = "SELECT * FROM users WHERE email = '"+useremail+"'";
            client.query(loginquery, function(error, results){
                done();
                if(error){
                    throw error;
                };
                let resultUser = results.rows;
                if(resultUser && bycrypt.compareSync(userpassword, resultUser[0]['password'])){
                    req.session.user = resultUser;
                    app.locals.username = resultUser[0]['email'];
                    app.locals.login = true;
                    var dataSend = {"login": "Login worked"};
                    res.send(JSON.stringify(dataSend));
                }
                if(resultUser && (bycrypt.compareSync(userpassword, resultUser[0]['password']) == false)){
                    var dataSend = {"login": "The password you have entered is incorrect!"};
                    res.send(JSON.stringify(dataSend));
                }
                if(resultUser.length == 0 && (bycrypt.compareSync(userpassword, resultUser[0]['password']) == false)){
                    var dataSend = {"login": "The username and/or password is incorrect!"};
                    res.send(JSON.stringify(dataSend));
                };
        });

        };
    });
});

app.post('/logout', (req, res) => {
    req.session.user = null;
    res.clearCookie("user_sid");
    app.locals.login = false;
    var dataSend = {"test": "Logout worked"};
    res.send(JSON.stringify(dataSend));
});

app.post('/createaccount', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let useremail = req.body.useremail;
    let userpassword = req.body.password;
    let major = req.body.major;
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let checkQuery = "SELECT * FROM users WHERE email = '"+useremail+"'";
            client.query(checkQuery, function(error, results){
                if(error){
                    throw error;
                };
                let resultUser = results.rows;
                if(resultUser.length > 0){
                    var dataSend = {"account": "User email already exists!"};
                    res.send(JSON.stringify(dataSend));
                }else{
                    let createAccountQuery = "INSERT INTO users (email, password, major, notify) VALUES ($1, $2, $3, $4)";
                    client.query(createAccountQuery, [useremail, bycrypt.hashSync(userpassword, 10), major, true], (error, results)=>{
                        done();
                        if(error){
                            throw error;
                        };
                        let resultUser = results.rows;
                        if(resultUser){
                            var dataSend = {"account": "Account worked"};
                            res.send(JSON.stringify(dataSend));
                        };
                           
                    });
                };
            });
        };
    });  
});

app.post('/forgotpassword', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let useremail = req.body.useremail;
    let userpassword = req.body.newpassword;
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let checkQuery = "SELECT * FROM users WHERE email = '"+useremail+"'";
            client.query(checkQuery, function(error, results){
                if(error){
                    throw error;
                };
                let resultUser = results.rows;
                if(resultUser.length == 0){
                    var dataSend = {"passwordreset": "Your email does not exist!"};
                    res.send(JSON.stringify(dataSend));
                }else{
                    let updatePasswordQuery = "UPDATE users SET password = $1 WHERE email = $2";
                    client.query(updatePasswordQuery, [bycrypt.hashSync(userpassword, 10), useremail], (error, results)=>{
                        done();
                        if(error){
                            throw error;
                        };
                        let resultUser = results.rows;
                        if(resultUser){
                            var dataSend = {"passwordreset": "Reset worked"};
                            res.send(JSON.stringify(dataSend));
                        };
                           
                    });
                };
            });
        };
    });  
});
// Serve the homepage
app.get('/', (req, res) => {
    if(req.session.user && req.cookies.user_sid){
        res.redirect('/mainweb');
    }
    else{
        res.redirect('/login');
    }
});
 

// Handling request  
app.post("/dataformresultsforalgorithm", (req, res) => { 
    res.setHeader('Content-Type', 'text/html');
    let type = req.body.type;
    let dataString = req.body.data;
    let artsString = req.body.arts;
    let societyString = req.body.society;
    const spawner = require('child_process').spawn;

    console.log('About to send data to course algorithm Python file. ');
    
    const python_process = spawner('python', ['.\\course_recomendation_algorithm.py', type, dataString, artsString, societyString]);
    
    python_process.stdout.on('data', (data) => {
        console.log('Data received from python:', data.toString());
        course_matches = data.toString();
        pool.connect(function (error, client, done){
            if(error){
                console.log(error);
            }else{
                let checkQuery = "SELECT * FROM courserecs WHERE userid = '"+req.session.user[0]['userid']+"'";
                client.query(checkQuery, function(error, result){
                    if(error){
                        throw error;
                    };
                    let resultUser = result.rows;
                    if(resultUser.length > 0){
                        let updatecourseQuery = "UPDATE courserecs SET courserecstring = $1 WHERE userid = $2";
                        client.query(updatecourseQuery, [course_matches, req.session.user[0]['userid']], (error, results)=>{
                            if(error){
                                throw error;
                            };
                            let resultUser = results.rows;
                            if(resultUser){
                                var dataSend = {"courses": "Update sucess!"};
                                res.send(JSON.stringify(dataSend));
                            };  
                        });
                    }else{
                        let createCourseQuery = "INSERT INTO courserecs (userid, courserecstring) VALUES ($1, $2)";
                        client.query(createCourseQuery, [req.session.user[0]['userid'], course_matches], (error, results)=>{
                            done();
                            if(error){
                                throw error;
                            };
                            let resultUser = results.rows;
                            if(resultUser){
                                var dataSend = {"courses": "Added new course recs!"};
                                res.send(JSON.stringify(dataSend));
                            };
                            
                        });
                    };

                });
            }
        });
    });
}); 
app.post("/updatecourseui", (req, res) => { 
    res.setHeader('Content-Type', 'text/html');
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let checkQuery = "SELECT * FROM courserecs WHERE userid = '"+req.session.user[0]['userid']+"'";
            client.query(checkQuery, function(error, result){
                if(error){
                    throw error;
                };
                let resultUser = result.rows;
                if(resultUser.length > 0){
                    let coursesQuery = "SELECT courserecstring FROM courserecs WHERE userid = '"+req.session.user[0]['userid']+"'";
                    client.query(coursesQuery, function(error, result){
                        done();
                        if(error){
                            throw error;
                        };
                        let resultUser = result.rows;
                        var dataSend = {"coursematches": resultUser[0]['courserecstring']};
                        res.send(JSON.stringify(dataSend));
                    });
                }
                else{
                    var dataSend = {"coursematches": 'No courses'};
                    res.send(JSON.stringify(dataSend));
                };


            });
        }
    });
}); 

app.post("/saveinterstformsummary", (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    let interstform = req.body.interestform;

    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let checkQuery = "SELECT * FROM interestresults WHERE userid = '"+req.session.user[0]['userid']+"'";
            client.query(checkQuery, function(error, result){
                if(error){
                    throw error;
                };
                let resultUser = result.rows;
                if(resultUser.length > 0){
                    let updateInterestsQuery = "UPDATE interestresults SET interstsumarystring = $1 WHERE userid = $2";
                    client.query(updateInterestsQuery, [interstform, req.session.user[0]['userid']], (error, results)=>{
                        if(error){
                            throw error;
                        };
                        let resultUser = results.rows;
                        if(resultUser){
                            var dataSend = {"interests": "Update sucess!"};
                            res.send(JSON.stringify(dataSend));
                        };  
                    });
                }else{
                    let createInterstQuery = "INSERT INTO interestresults (userid, interstsumarystring) VALUES ($1, $2)";
                    client.query(createInterstQuery, [req.session.user[0]['userid'], interstform], (error, results)=>{
                        done();
                        if(error){
                            throw error;
                        };
                        let resultUser = results.rows;
                        if(resultUser){
                            var dataSend = {"interests": "Added new interests!"};
                            res.send(JSON.stringify(dataSend));
                        };
                        
                    });
                };

            });
        }
    });

});

app.post("/loadinterests", (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let checkQuery = "SELECT * FROM interestresults WHERE userid = '"+req.session.user[0]['userid']+"'";
            client.query(checkQuery, function(error, result){
                if(error){
                    throw error;
                };
                let resultUser = result.rows;
                if(resultUser.length > 0){
                    let interestsQuery = "SELECT interstsumarystring FROM interestresults WHERE userid = '"+req.session.user[0]['userid']+"'";
                    client.query(interestsQuery, function(error, result){
                        done();
                        if(error){
                            throw error;
                        };
                        let resultUser = result.rows;
                        var dataSend = {"insterestsaved": resultUser[0]['interstsumarystring']};
                        res.send(JSON.stringify(dataSend));
                    });
                }else{
                    var dataSend = {"insterestsaved": 'No intersts'};
                    res.send(JSON.stringify(dataSend));
                };

            });
        }
    });
});

app.post("/savefouryearplan", (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    let savedPlan = req.body.fouryearplan;

    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let checkQuery = "SELECT * FROM fouryearplan WHERE userid = '"+req.session.user[0]['userid']+"'";
            client.query(checkQuery, function(error, result){
                if(error){
                    throw error;
                };
                let resultUser = result.rows;
                if(resultUser.length > 0){
                    let updateInterestsQuery = "UPDATE fouryearplan SET planstring = $1 WHERE userid = $2";
                    client.query(updateInterestsQuery, [savedPlan, req.session.user[0]['userid']], (error, results)=>{
                        if(error){
                            throw error;
                        };
                        let resultUser = results.rows;
                        if(resultUser){
                            var dataSend = {"savedplan": "Update sucess!"};
                            res.send(JSON.stringify(dataSend));
                        };  
                    });
                }else{
                    let createInterstQuery = "INSERT INTO fouryearplan (userid, planstring) VALUES ($1, $2)";
                    client.query(createInterstQuery, [req.session.user[0]['userid'], savedPlan], (error, results)=>{
                        done();
                        if(error){
                            throw error;
                        };
                        let resultUser = results.rows;
                        if(resultUser){
                            var dataSend = {"savedplan": "Added new interests!"};
                            res.send(JSON.stringify(dataSend));
                        };
                        
                    });
                };

            });
        }
    });

});

app.post("/updatefouryearplanui", (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            console.log(req.session.user[0]['userid']);
            let checkQuery = "SELECT * FROM fouryearplan WHERE userid = '"+req.session.user[0]['userid']+"'";
            client.query(checkQuery, function(error, result){
                if(error){
                    throw error;
                };
                let resultUser = result.rows;
                if(resultUser.length > 0){
                    let interestsQuery = "SELECT planstring FROM fouryearplan WHERE userid = '"+req.session.user[0]['userid']+"'";
                    client.query(interestsQuery, function(error, result){
                        done();
                        if(error){
                            throw error;
                        };
                        let resultUser = result.rows;
                        var dataSend = {"plansaved": resultUser[0]['planstring']};
                        res.send(JSON.stringify(dataSend));
                    });
                }else{
                    var dataSend = {"plansaved": 'No plan'};
                    res.send(JSON.stringify(dataSend));
                };

            });
        }
    });
});
//Settings
app.post('/loadsettings', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let getaccountQuery = "SELECT email, password, major, notify FROM users WHERE userid = '"+req.session.user[0]['userid']+"'";
            client.query(getaccountQuery, function(error, results){
                done();
                if(error){
                    throw error;
                };
                let resultUser = results.rows;
                var dataSend = {"email": resultUser[0]['email'], "password": resultUser[0]['password'], "major": resultUser[0]['major'], "notify": resultUser[0]['notify'] };
                res.send(JSON.stringify(dataSend));
        });

        };
    });
});
app.post('/updatesettings', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let updateEmail = req.body.email;
    let updatePassword = req.body.password;
    let updateMajor = req.body.major;
    let updateNotify = req.body.notify;
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let updateaccountQuery = "UPDATE users SET email = $1, password = $2, major = $3, notify = $4 WHERE userid = $5";
            client.query(updateaccountQuery, [updateEmail, bycrypt.hashSync(updatePassword, 10), updateMajor, updateNotify, req.session.user[0]['userid']], (error, results) =>{
                done();
                if(error){
                    throw error;
                };
                let resultUser = results.rows;
                var dataSend = {"updateAccount": "Completed"};
                res.send(JSON.stringify(dataSend));
            });

        };
    });
});

function sendEmailReminders(){
    console.log("In Cron function");
    pool.connect(function (error, client, done){
        if(error){
            console.log(error);
        }else{
            let getaccountQuery = "SELECT email FROM users";
            client.query(getaccountQuery, function(error, results){
                done();
                if(error){
                    throw error;
                };
                let resultUser = results.rows;
                for (let i = 0; i < resultUser.length; i++) {
                    let user_email = resultUser[i]['email'];
                    const spawner = require('child_process').spawn;
    
                    console.log('About to send data to email Python file. ');
                    
                    const python_process = spawner('python', ['.\\email_reminders.py', user_email]);
                    
                    python_process.stdout.on('data', (data) => {
                        console.log('Data received from python:', data.toString());
    
                    });
                }
        });

        };
    });

}


//Automatic Emails

const task = cron.schedule("0 0 1 * *", ()=> {
    console.log("In CRON expression");
    sendEmailReminders();
    console.log("Executing...");
})

task.start()

//Server setup
app.listen(3000, () => {
    console.log("Server running on port 3000");
});