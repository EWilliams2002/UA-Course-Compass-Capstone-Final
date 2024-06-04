
var resetPasswordButton = document.getElementById("resetPasswordButton");
let forgotError = document.getElementById("throwError");


document.getElementById("resetPasswordButton").onclick = function resetPassword(){
    let userEmail = document.getElementById("forgotEmail").value;
    let newPassword = document.getElementById("newPassword").value;

    //Sending login info to server
    let payload = {useremail: userEmail, newpassword: newPassword};
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/forgotpassword');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var response = JSON.parse(xhr.responseText);
            if(response["passwordreset"] == "Reset worked"){
                window.location.replace("login.html");
                forgotError.style.display = "none";
            }else{
                forgotError.style.display = "block";
                setTimeout(function(){
                    window.location.replace("forgotpassword.html");
                }, 5000); 
            };
        };
    };
}