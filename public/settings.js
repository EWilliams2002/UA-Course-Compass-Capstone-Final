
window.onload = function(e){
    let email = document.getElementById("currentEmail");
    let password = document.getElementById("currentPassword");
    let major = document.getElementById("currentMajor");
    let notify = document.getElementById("currentNotify");
	let payload = {getdata: "Sending data"};
  	let xhr = new XMLHttpRequest();
  	xhr.open('POST', '/loadsettings');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = JSON.parse(xhr.responseText);
			email.innerHTML = response["email"];
            password.innerHTML = "Your password is hashed for security"
            major.innerHTML = response["major"];
            notify.innerHTML = response["notify"];
		};
	};


}
const accountButton = document.getElementById("accountButton");
const instructions = document.getElementById("instructions");

// These 3 event listners change the content of the settings tab
accountButton.addEventListener("click", () => {
    location.reload();
});

//This one sets changes the screen to instructions
instructions.addEventListener("click", () => {
    window.location.href = "instructions.html";
});


document.getElementById("accountSettingsSave").onclick = function updateAccountSettings(){
    let email = document.getElementById("updateEmail").value;
    let password = document.getElementById("updatePassword").value;
    let major = document.getElementById("updateMajor").value;
    let notify = true;
    if(document.getElementById("optYes").checked){
        notify = true;
    }
    if(document.getElementById("optNo").checked){
        notify = false;
    }
    
	let payload = {email: email, password: password, major: major, notify: notify};
  	let xhr = new XMLHttpRequest();
  	xhr.open('POST', '/updatesettings');
 	 xhr.setRequestHeader('Content-Type', 'application/json');
  	xhr.send(JSON.stringify(payload));
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var response = JSON.parse(xhr.responseText);
			email.innerHTML = response["email"];
            password.innerHTML = response["password"];
            major.innerHTML = response["major"];
            notify.innerHTML = response["notify"];
		};
	};

    location.reload();

}

//Logout
document.getElementById("settingsLogout").onclick = function logoutUser(){
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
}