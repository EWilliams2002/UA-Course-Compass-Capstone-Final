
function logEmailNotifs() {
    // Function to log an email on list of emails to send notfications
        // Can be different email than one used for account
}

function changeName() {
    // Function to make requet and change name
}

function changePassword() {
    // Function to make requet to reset password
        // different than forget password-reset password screen
        // resets in the settings screen with a alert notification saying it reset
        // request should confirm original password exists and both original and new match as well
}

function changeEmail() {
    // Function to change email used for account
}

const accountButton = document.getElementById("accountButton");
const passwordButton = document.getElementById("passwordButton");
const notificationsButton = document.getElementById("emailnotifButton");
const instructions = document.getElementById("instructions");

var passwordResetButton = "";
var nameResetButton = "";
var emailNotifResetButton = "";
var emailResetButton = "";

// These 3 event listners change the content of the settings tab
accountButton.addEventListener("click", () => {
    let html_to_insert = "<form> <div class='accountSettings' style='margin-top: 0;'> <label for='firstName' class='accountLabels'>First Name</label>" +
                            "<br> <input type='text' id='firstName' class='accountInputs' name='firstName' value='' required=''> </div> " + 
                            "<div class='accountSettings' style='margin-top: 10px;'> <label for='lastName' class='accountLabels'>Last Name</label>" + 
                            "<br> <input type='text' id='lastName' class='accountInputs' name='lastName' value='' required=''> </div> " + 
                            "<div class='accountSettings' style='margin-top: 10px;'> <button type='button' id='nameResetButton' value='Submit'>Submit</button> </div> </form> " + 
                            "<form> <div class='accountSettings' style='margin-top: 0px; margin-left: 17px;'> <label for='email' class='accountLabels'>Email</label><br> " + 
                            "<input type='email' id='email' class='accountInputs' name='email' value='' required=''>" + 
    " </div> <div class='accountSettings' style='margin-top: 10px; margin-left: 17px;'> <button type='button' id='emailResetButton' value='Submit'>Submit</button> </div> </form>";
    
    document.getElementById("settings").innerHTML = html_to_insert;

    if (document.getElementById("firstName").value == "" || 
        document.getElementById("lastName").value == "" || 
        document.getElementById("email").value == "") {
        // Uncooment this code and make /getName request to fill
        // names when the settings tab is pressed

        // fetch("/getName")
        // .then((response) => response.text())
        // .then((details) => {
        //     let firstName = details.split(' ')[0];
        //     let lastName = details.split(' ')[1];
        //     let email = details.split(' ')[2];
        //     document.getElementById("firstName").value = firstName;
        //     document.getElementById("lastName").value = lastName;
        //     document.getElementById("email").value = email;
        // })
        // .catch((error) => console.error(error));
        
    }
    //declares buttons in html
    nameResetButton = document.getElementById("nameResetButton");
    emailResetButton = document.getElementById("emailResetButton");
    
    
});
passwordButton.addEventListener("click", () => {
    let html_to_insert = "<form> <div class='passwordSettings' style='margin-top: 0;'> <label for='origPassword' class='passwordLabels'>Original Password</label><br> "+ 
                         "<input type='password' id='origPassword' class='passwordInputs' name='origPassword' value='' required=''> </div> " + 
                         "<div class='passwordSettings' style='margin-top: 0;'> <label for='newPassword' class='passwordLabels'>New Password</label><br> " + 
                         "<input type='password' id='newPassword' class='passwordInputs' name='newPassword' value='' required=''> </div> " + 
    "<div class='passwordSettings' style='margin-top: 10px;'> <button type='button' id='passwordResetButton' value='Submit'>Submit</button> </div> </form>";

    document.getElementById("settings").innerHTML = html_to_insert;

    

    //declares buttons in html
    passwordResetButton = document.getElementById("passwordResetButton");
});
notificationsButton.addEventListener("click", () => {
    let html_to_insert = "<form> <div class='emailSettings' style='margin-top: 0;'> <label for='email' class='emailLabels'>Mailing Email</label><br> " +
                         "<input type='email' id='origPassword' class='accountInputs' name='email' value='' required=''> </div>" + 
                         "<div class='emailSettings' style='margin-top: 10px;'> " +
    "<button type='button' id='emailnotifResetButton' value='Submit'>Submit</button> </div> </form>";

    document.getElementById("settings").innerHTML = html_to_insert;

    //declares buttons in html
    emailNotifResetButton = document.getElementById("emailnotifResetButton");
});

//This one sets changes the screen to instructions
instructions.addEventListener("click", () => {
    window.location.href = "instructions.html";
});

//Resets password
passwordResetButton.addEventListener("click", () => {
    changePassword()
});

//Resets email
emailResetButton.addEventListener("click", () => {
    changeEmail()
});

//Resets name
nameResetButton.addEventListener("click", () => {
    changeName()
});