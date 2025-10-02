// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(testFn(4)); // Affiche : "Très bien"
console.log(testFn(2)); // Affiche : "Moyen"
console.log(testFn(-99)); // Affiche : "La note doit être un nombre compris entre 0 et 5"
console.log(testFn(200)); // Affiche : "La note doit être un nombre compris entre 0 et 5"
console.log(testFn(undefined)); // Affiche : "La note doit être un nombre compris entre 0 et 5"
