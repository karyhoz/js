//validate form

var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];

var email_err = document.getElementById("email_err");
var pass_err = document.getElementById("pass_err");

email.addEventListener("textInput", email_Verify);
password.addEventListener("textInput", pass_Verify);

function validated() {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_err.style.display = "block";
    email.focus();
    return false;
  }

  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    pass_err.style.display = "block";
    password.focus();
    return false;
  }
}
function email_Verify() {
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    pass_err.style.display = "none";
    return true;
  }

  if (password.value.length >= 6) {
    password.style.border = "1px solid silver";
    pass_err.style.display = "none";
    return true;
  }
}
