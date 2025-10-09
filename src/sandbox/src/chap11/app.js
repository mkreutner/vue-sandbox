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

document.querySelector("#bChgImg").addEventListener("click", changeImg);
