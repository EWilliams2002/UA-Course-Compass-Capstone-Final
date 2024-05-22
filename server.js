const express = require('express');

const path = require('path')

const StringDecoder = require("string_decoder").StringDecoder

const app = express();


app.use(express.json()); 

app.use(express.static('public'));

//Data structures
let course_matches = "";

// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/mainweb.html');
});

// Handling request  
app.post("/dataformresults/post", (req, res) => { 
    console.log("Server received");
    res.setHeader('Content-Type', 'text/html');
    let type = req.body.type;
    let dataString = req.body.data;
    let artsString = req.body.arts;
    let societyString = req.body.society;
    console.log(dataString);
    const spawner = require('child_process').spawn;

    console.log('About to send data to course algorithm Python file. ');
    
    const python_process = spawner('python', ['.\\course_recomendation_algorithm.py', type, dataString, artsString, societyString]);
    
    python_process.stdout.on('data', (data) => {
        console.log('Data received from python:', data.toString());
        course_matches = data.toString();
        //TODO This will be changed to use sql instead 
        var dataSend = {"courses": course_matches};
        console.log(JSON.stringify(dataSend));
        res.send(JSON.stringify(dataSend));
        console.log("Courses sent!");
    });
}); 
app.post("/updatecourseui/post", (req, res) => { 
    //TODO Eventually this will be changed to use SQL insead
    console.log("Server received");
    res.setHeader('Content-Type', 'text/html');
    var dataSend = {"courses": course_matches};
    console.log(JSON.stringify(dataSend));
    res.send(JSON.stringify(dataSend));
    console.log("Courses sent!");
}); 


//Server setup
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

function dataToCourseRec(type, dataString, artsString, societyString){
    console.log('In Python Function');
    const spawner = require('child_process').spawn;

    console.log('About to send data to course algorithm Python file. ');
    
    const python_process = spawner('python', ['.\\course_recomendation_algorithm.py', type, dataString, artsString, societyString]);
    
    python_process.stdout.on('data', (data) => {
        console.log('Data received from python:', data.toString());
        let course_matches = data.toString();
        let course_results_received = true;
        sendData(course_matches);
        // Sending course data back to Client
    });
}
function sendData(course_matches){
    console.log("In sendData function");
    app.get("/coursematches", (req, res)=>{
        console.log("Server Sending course matches");
        var dataSend = {"courses": course_matches};
        console.log(JSON.stringify(dataSend));
        res.send(JSON.stringify(dataSend));
    });
}