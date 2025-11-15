
function validateRegister() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const pw = document.getElementById('password').value;
  const cpw = document.getElementById('confirm').value;

  if (name.length < 2) {
    alert("Name must be at least 2 characters long");
    return false;
  }
  if (!email.includes("@")) {
    alert("Enter a valid email address");
    return false;
  }
  if (pw.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }
  if (pw !== cpw) {
    alert("Passwords do not match");
    return false;
  }
  alert("Registration Successful!");
  return true;
}

function validateLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pw = document.getElementById('loginPassword').value;
  if (!email || !pw) {
    alert("Please fill all fields");
    return false;
  }
  alert("Login Successful!");
  return true;
}
