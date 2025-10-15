import "./styles.css";

const baseUrl = "https://my-json-server.typicode.com/mkreutner/data-mock/";

const runL136 = false; // La Web API location
const runL137 = false; // Les méthodes de l'objet location
const runL138 = false; // La Web API history
const runL139 = true; // L'objet state d'history

//#region La Web API location
if (runL136) {
  console.log(location);
  console.log(window.location);
  console.log(document.location);

  const url = new URL(location.href);
  console.log(url.searchParams.get("q"));

  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams.get("q"));

  setTimeout(() => {
    location.href = "http://localhost:8080";
  }, 3000);
}
//#endregion

//#region Les méthodes de l'objet location
if (runL137) {
  console.log(location);

  // can return previous page
  // location.assign("https://dyma.fr");
  // cannot return on previous page (clear history?)
  // location.replace("https://dyma.fr");

  // reload current page
  // location.reload();
  console.log(location.toString());
}
//#endregion

//#region La Web API history
if (runL138) {
  const back = document.querySelector("#back");
  const next = document.querySelector("#next");

  back.addEventListener("click", (event) => {
    history.back();
  });

  next.addEventListener("click", (event) => {
    history.forward();
  });

  // 5 x back
  // history.go(-5);
  // 10 x forward
  // history.go(10);
}
//#endregion

//#region L'objet state d'history
if (runL139) {
  console.log(history);

  let inputNonoStateValue;

  let inputNonoValue;
  const inputNono = document.querySelector("#nono");
  const btnClearInputNono = document.querySelector("#clear");

  btnClearInputNono.addEventListener("click", (event) => {
    history.replaceState({ inputNono: "" }, "");
  });

  if (history.state) {
    inputNonoStateValue = history.state.inputNono;
    inputNonoValue = inputNonoStateValue;
    inputNono.value = inputNonoValue;
  }

  setInterval(() => {
    const value = inputNono.value;
    if (value !== inputNonoValue) {
      inputNonoValue = value;
      history.pushState({ inputNono: value }, "");
    }
  }, 2500);

  window.addEventListener("popstate", (event) => {
    console.log("POPSTATE");
    console.log(history.state);
  });
}
//#endregion
