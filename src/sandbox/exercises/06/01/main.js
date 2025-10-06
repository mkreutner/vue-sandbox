// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(typeof testFn().prenom);
console.log(typeof testFn("TEST").nom);
console.log(typeof testFn("HeLLo").adresse);
console.log(typeof testFn("HeLLo").age);
