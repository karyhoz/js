function validation() {
  if (Document.Formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username";
    return false;
  } else if (Document.Formfill.Username.value < 6) {
    document.getElementById("result").innerHTML = "At list six letters";
    return false;
  } else if (Document.Formfill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter your Email";
    return false;
  } else if (Document.Formfill.Password.value == "") {
    document.getElementById("result").innerHTML = "Enter your Password";
    return false;
  } else if (
    Document.Formfill.Password.value !== Document.Formfill.CPassword.value
  ) {
    document.getElementById("result").innerHTML = "Password not match";
    return false;
  } else if (Document.Formfill.CPassword.value) {
    document.getElementById("result").innerHTML = "Enter confirme password";
    return false;
  }
}
