function dashboardadmin() {
  var x = document.getElementById("email");
  var y = document.getElementById("pswd");
  var title = document.getElementById("title1");
  var photo = document.getElementById("photo1");

  var add_blog = document.getElementById("add_blog");
  var view_blog = document.getElementById("view_blog");
  var delete_blog = document.getElementById("delete_blog");
  var textarea = document.getElementById("description1");
  if (x === "bellox" && y == "123") {
    loginbtn == "dashboard.html";
  } else {
    loginbtn = "blogs.html";
  }
}
function addBlog() {
  document.getElementById("add-blog").style.display = "block";
}
function cancel() {
  document.getElementById("add-blog").style.display = "none";
}
add_blog.onclick = function () {
  localStorage.setItem("first", "second");
};
delete_blog.onclick = function () {
  localStorage.clear();
};
