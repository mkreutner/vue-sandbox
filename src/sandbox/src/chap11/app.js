import "./styles.css";

// console.log(navigator.userAgent);
// console.log(`${screen.width} x ${screen.height}`);
// console.log(location.origin);
// console.log(document);

// Ancienne API
// const elem = document.getElementById("myImage");
// console.log(elem);
// console.log(document.getElementsByTagName("img"));
// console.log(document.querySelector(".item-mnu"));
// console.log(document.querySelectorAll(".item-mnu"));

function changeImg(event) {
  const img = document.querySelector("#myImage");
  const width = img.clientWidth;
  const height = img.clientHeight;
  if (img.getAttribute("data-name") == "sucette") {
    img.src = "src/chap11/images/flower.jpg";
    img.setAttribute("data-name", "flower");
  } else {
    img.src = "src/chap11/images/sucette.jpg";
    img.setAttribute("data-name", "sucette");
  }
  img.width = width;
  img.height = height;
}

function alertUser(event) {
  const section = document.querySelector("#mainSection");
  const alertUser = document.querySelector("#bAlertUser");
  section.classList.toggle("bg-alert");
  alertUser.value = section.classList.contains("bg-alert")
    ? "Unalert User"
    : "Alert User";
}

function createLogin(event) {
  const mainApp = document.querySelector("#mainApp");

  const formLogin = document.createElement("div");
  formLogin.setAttribute("id", "frmLogin");
  formLogin.setAttribute("name", "frmLogin");
  formLogin.classList.add("form");
  const formGroupUsername = document.createElement("div");
  formGroupUsername.classList.add("form-group");
  const labelUsername = document.createElement("label");
  labelUsername.setAttribute("id", "lblUsername");
  labelUsername.setAttribute("name", "lblUsername");
  labelUsername.setAttribute("for", "inUsername");
  labelUsername.innerHTML = "Username:";
  const inputUsername = document.createElement("input");
  inputUsername.setAttribute("id", "inUsername");
  inputUsername.setAttribute("name", "inUsername");
  inputUsername.setAttribute("type", "text");

  if (mainApp.querySelector("#frmLogin") === null) {
    formGroupUsername.appendChild(labelUsername);
    formGroupUsername.appendChild(inputUsername);
    formLogin.appendChild(formGroupUsername);
    mainApp.appendChild(formLogin);
  }
}

document.querySelector("#bChgImg").addEventListener("click", changeImg);
document.querySelector("#bAlertUser").addEventListener("click", alertUser);
document.querySelector("#bLoginMe").addEventListener("click", createLogin);
