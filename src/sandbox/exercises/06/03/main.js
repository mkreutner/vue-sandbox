// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(
  testFn({
    familly: {
      father: {
        firstname: "Jean",
        lastname: "Valjean",
      },
    },
  })
);
