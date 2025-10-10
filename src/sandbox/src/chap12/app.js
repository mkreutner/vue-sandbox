import "./styles.css";

const eventsApp = document.querySelector("#eventsApp");
const btnTriggerEvent = document.querySelector("#btnTriggerEvent");
const parentBC = document.querySelector("#parentBC");
const childBC = document.querySelector("#childBC");

const formEvent = document.querySelector("#formEvent");
const inFormEvent = document.querySelector("#inFormEvent");

/*
eventsApp.onmouseenter = () => {
  eventsApp.style.backgroundColor = "red";
};

eventsApp.onmouseout = () => {
  eventsApp.style.backgroundColor = "lightgray";
};
*/

function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setbgColor(evt) {
  if (evt.currentTarget.color === undefined) {
    eventsApp.style.backgroundColor = randomColor();
  } else {
    eventsApp.style.backgroundColor = evt.currentTarget.color;
  }
  evt.currentTarget.color = randomColor();
}

function setHeight(evt) {
  if (evt.currentTarget.height === undefined) {
    evt.currentTarget.height = "400px";
  }
  eventsApp.style.height = evt.currentTarget.height;
}

eventsApp.addEventListener("mouseenter", setbgColor, false);
eventsApp.addEventListener("mouseenter", setHeight, false);
eventsApp.addEventListener("mouseout", () => {
  eventsApp.style.backgroundColor = "lightgray";
  eventsApp.style.height = "200px";
  //eventsApp.removeEventListener("mouseenter", setHeight);
});
btnTriggerEvent.addEventListener("click", () => {
  eventsApp.dispatchEvent(new Event("mouseenter"));
});

parentBC.addEventListener(
  "click",
  () => {
    console.log("click on parent");
  },
  { capture: false }
);
childBC.addEventListener(
  "click",
  () => {
    console.log("click on child");
  },
  { capture: false }
);

formEvent.addEventListener("submit", (event) => {
  console.log(event);
  console.log(inFormEvent);
  event.preventDefault();
});
formEvent.addEventListener("click", (event) => {
  console.log("Click FORM");
});
inFormEvent.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
inFormEvent.addEventListener("click", (event) => {
  console.log("Click INPUT");
  event.stopPropagation();
});
