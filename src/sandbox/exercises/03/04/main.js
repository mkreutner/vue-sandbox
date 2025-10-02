// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(testFn(50)); // Affiche: 50515354
console.log(testFn(-5)); // Affiche : -5-4-2-1
console.log(testFn(undefined)); // Affiche : Pas un nombre
console.log(testFn("Dupont")); // Affiche : Pas un nombre
