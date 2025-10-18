import "./styles.css";

const baseUrl = "https://my-json-server.typicode.com/mkreutner/data-mock/";

const runL167 = false; // Introduction à la gestion d'erreur
const runL168 = true; // Etendre l'objet Error
const runL169 = false; // Le déboggeur de Chrome DevTools
const runL170 = false; // Le déboggeur de VS Code

//#region Introduction à la gestion d'erreur
if (runL167) {
  function getTransaction() {
    const data = {
      name: "Euro",
    };

    if (!data.amount) {
      throw new Error("Amount is missing!");
    }
  }

  try {
    getTransaction();
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    console.log(err);
  }
}
//#endregion

//#region Etendre l'objet Error
if (runL168) {
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.message = message;
    }
  }

  function getTransaction() {
    const data = {
      name: "Euro",
    };
    //debugger;
    if (!data.amount) {
      throw new ValidationError("Amount is missing!");
    }
  }

  try {
    getTransaction();
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log("Try again");
    } else {
      throw err;
    }
  }
}
//#endregion

//#region Le déboggeur de Chrome DevTools
if (runL169) {
}
//#endregion

//#region Le déboggeur de VS Code
if (runL170) {
}
//#endregion
