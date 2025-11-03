
let passwordInput = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("change", function() {
  if (this.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});


// togglePassword.addEventListener("change", function() {
//    console.dir(this);

// })
