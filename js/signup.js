const data = document.getElementById("signup-form");

data.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("psw").value;
  let repeat_password = document.getElementById("psw-repeat").value;

  if (username.trim() == "") {
    let error = document.getElementById("username-error");
    error.innerText = "Username is required!";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("username-error");
    error.innerText = "";
  }

  if (email.trim() == "") {
    let error = document.getElementById("email-error");
    error.innerText = "Email is required!";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("email-error");
    error.innerText = "";
  }

  if (password.trim() == "") {
    let error = document.getElementById("password-error");
    error.innerText = "Password is required!";
    error.style.color = "red";
    return;
  }
  if (password.trim().length < 6) {
    let error = document.getElementById("password-error");
    error.innerText = "Password must be atleast 6 characters!";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("password-error");
    error.innerText = "";
  }

  if (repeat_password != password) {
    let error = document.getElementById("repeat-password-error");
    error.innerText = "Passwords mismatch!";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("repeat-password-error");
    error.innerText = "";
  }
  if (email == "admin@gmail.com" && password == "admin123") {
    window.location.href = "../htmlpages/dashboard.html";
  } else {
    window.location.href = "../htmlpages/blogs.html";
  }

  console.log(username, email, password, repeat_password);
});
