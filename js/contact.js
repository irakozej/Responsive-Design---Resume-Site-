const data = document.getElementById("signup-form");

data.addEventListener(".send-btn", function (event) {
  event.preventDefault();

  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("message").value;

  if (username.trim() == "") {
    let error = document.getElementById("name-error");
    error.innerText = "name is required!";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("name-error");
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

  if (message.trim() == "") {
    let error = document.getElementById("message-error");
    error.innerText = "message is required!";
    error.style.color = "red";
    return;
  }
  if (password.trim().length < 6) {
    let error = document.getElementById("message-error");
    error.innerText = "Enter a message ";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("password-error");
    error.innerText = "";
  }

  if (email == "admin@gmail.com" && password == "admin") {
    window.location.href = "/dashboard.html";
  } else {
    window.location.href = "/blogs.html";
  }

  console.log(name, email);
});
