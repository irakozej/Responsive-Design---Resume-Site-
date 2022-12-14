const data = document.getElementById("login-form");

data.addEventListener("submit", function (event) {
  event.preventDefault();

  let Email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;

  if (Email.trim() == "") {
    let error = document.getElementById("Email-error");
    error.innerText = "Email is required!";
    error.style.color = "red";
    return;
  } else if (!ValidateEmail(Email)) {
    let error = document.getElementById("Email-error");
    error.innerText = "Email is not valid!";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("Email-error");
    error.innerText = "";
  }

  if (password.trim() == "") {
    let error = document.getElementById("pswd-error");
    error.innerText = "password is required!";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("pswd-error");
    error.innerText = "";
  }
  if (password.trim().length < 6) {
    let error = document.getElementById("pswd-error");
    error.innerText = "Password must be atleast 6 characters!";
    error.style.color = "red";
    return;
  } else {
    let error = document.getElementById("pswd-error");
    error.innerText = "";
  }
  if (Email == "admin@gmail.com" && password == "admin123") {
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "blogs.html";
  }

  console.log(Email, password);
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
