// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(testFn(true, 22)); // Affiche : [42, "Majeur aux USA"]
console.log(testFn(false, 18)); // Affiche : [0, "Majeur en France"]
console.log(testFn(1, 12)); // Affiche : [42, "Mineur"]
console.log(testFn(0, 19)); // Affiche : [0, "Majeur en France"]
