// Add login and ceate function requests
    // implement hashing passwords and creating sessions with cookies in server.js file

// Add function requests to bring up an error when user enters anything but an email and


let loginStatus1 = document.getElementById("loginError1");
let loginStatus2 = document.getElementById("loginError2");
document.getElementById("loginButton").onclick = function loginUser(){

    let useremail = document.getElementById("emaillogin").value;
    let password = document.getElementById("passwordlogin").value;
    //Sending login info to server
    let payload = {useremail: useremail, password: password};
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var response = JSON.parse(xhr.responseText);
        if(response["login"] == "Login worked"){
            window.location.replace("mainweb.html");
            loginStatus1.style.display = "none";
            loginStatus2.style.display = "none";
        }else{
            if(response["login"] == "The password you have entered is incorrect!"){
                loginStatus1.style.display = "block";
            } else{
                loginStatus2.style.display = "block";
            }
            setTimeout(function(){
                window.location.replace("login.html");
            }, 5000); 

        };
    };
    };

}
let accountStatus = document.getElementById("createError");
document.getElementById("createAccountButton").onclick = function createUser(){
    let useremail = document.getElementById("emailcreate").value;
    let password = document.getElementById("passwordcreate").value;
    let major = "";
    if (document.getElementById("emphDs").checked){
        major = document.getElementById("emphDs").value;
    }else{
        if (document.getElementById("emphIntTech").checked){
            major = document.getElementById("emphIntTech").value;
        };
    };
    //Sending login info to server
    let payload = {useremail: useremail, password: password, major: major};
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/createaccount');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var response = JSON.parse(xhr.responseText);
            if(response["account"] == "Account worked"){
                window.location.replace("login.html");
                accountStatus.style.display = "none";
            }else{
                accountStatus.style.display = "block";
                setTimeout(function(){
                    window.location.replace("login.html");
                }, 5000); 
            };
        };
    };

}

document.getElementById("forgotpassword").onclick = function loadPage(){
    window.location.replace("forgotpassword.html");
};
