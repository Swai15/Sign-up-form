
function checkPassword(event) {
  const pass = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    pass.style.border = "2px red solid"
    pass.style.boxShadow = "0px 1px 2px black"

    confirmPass.style.border = "2px red solid"
    confirmPass.style.boxShadow = "0px 1px 2px black"

    return false

  }
}