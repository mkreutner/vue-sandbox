const body = document.querySelector("body");
let calc;
let modal;
let btnOk;
let btnCancel;

const createCalc = () => {
  calc = document.createElement("div");
  calc.classList.add("calc");
};

const createModal = (message) => {
  modal = document.createElement("div");

  btnOk = document.createElement("button");
  btnOk.classList.add("btn", "btn-primary");
  btnOk.innerText = "Ok";
  btnCancel = document.createElement("button");
  btnCancel.classList.add("btn", "btn-danger");
  btnCancel.innerText = "Cancel";
  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  modal.classList.add("modal");
  modal.innerHTML = `<p>${message}</p>`;
  modal.append(btnCancel, btnOk);
};

const confirmModal = (message) => {
  createCalc();
  createModal(message);
  calc.append(modal);
  body.append(calc);
  return new Promise((resolve, reject) => {
    calc.addEventListener("click", (event) => {
      resolve(false);
      calc.remove();
    });
    btnCancel.addEventListener("click", (event) => {
      resolve(false);
      calc.remove();
    });
    btnOk.addEventListener("click", (event) => {
      resolve(true);
      calc.remove();
    });
  });
};

export { confirmModal };
