var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];

var email_err = document.getElementById("email_err");
var pass_err = document.getElementById("pass_err");

email.addEventListener("input", validated);
password.addEventListener("input", validated);

function validated() {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_err.style.display = "block";
    email.focus();
  } else {
    email.style.border = "1px solid silver";
    email_err.style.display = "none";
  }

  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    pass_err.style.display = "block";
    password.focus();
  } else {
    password.style.border = "1px solid silver";
    pass_err.style.display = "none";
  }
}
