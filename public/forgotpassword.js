// Add code to this file to make function request to send email verification

function sendEmail() {
    // Request to Send email
}

function resetPassword() {
    // reset password request and switch to login page in here
}

function verifyCode() {
    //Make request to server to verify the code given and then inside request switch page to resetpassword.html
}

var sendEmailButton = document.getElementById("sendEmailButton");
var verifyCodeButton = document.getElementById("verifyCodeButton");
var resetPasswordButton = document.getElementById("resetPasswordButton");

sendEmailButton.addEventListener("click", () => {
    sendEmail()
    window.location.href = "verifycode.html";
});

verifyCodeButton.addEventListener("click", () => {
    verifyCode()
});

resetPasswordButton.addEventListener("click", () => {
    resetPassword()
});