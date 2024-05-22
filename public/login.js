// Add login and ceate function requests
    // implement hashing passwords and creating sessions with cookies in server.js file

// Add function requests to bring up an error when user enters anything but an email and

function login() {
    let e = $("#email").val();
    let p = $("#password").val();
    $.get("/account/login/" + e + "/" + encodeURIComponent(p), (data, status) => {
      alert(data);
      if (data == "SUCCESS") {
        window.location.href = "disclaimer.html";
      }
    });
}

function logout() {
  //Implement logout functions to bring back to login page
}

function switchToCreate() {
  window.location.href = "createAccount.html";
}

function switchToForgotPassword() {
  window.location.href = "forgotpassword.html";
}

//Also check and report back if account already exists here as well
function createAccount() {
  let u = $("#create-username").val();
  let p = $("#create-password").val();
  $.get(
    "/account/create/" + u + "/" + encodeURIComponent(p),
    (data, status) => {
      alert(data);
      window.location.href = "disclaimer.html";
      // Dont know if it'll work but we could put a set timeout here that lasts the same time
      // as the one to switch the page off of disclaimer.html but add half a second to it so 
      // that the instructions load on the first time they create an account.

      //  Alternatively we could save a boolean in the schema for the accounts that tell whether
      // they are a first time member or not
    }
  );
}