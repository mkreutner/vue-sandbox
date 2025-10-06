// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(testFn({ prenom: 42, nom: "Dupont" }));
console.log(testFn({ prenom: "Jean", nom: "Bob" }));
console.log(testFn({ prenom: "Jean", age: 72 }));
