
document.getElementById("logoutMain").onclick = function logoutUser(){
    //Sending login info to server
    let payload = {logout: "Logging out user"};
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/logout');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var response = JSON.parse(xhr.responseText);
        window.location.replace("login.html");
    };
    };
};