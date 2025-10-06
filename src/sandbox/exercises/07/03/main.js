// main.js

// Importation nommée
import { creerMultiplicateur } from "./src/index.js";

const doubler = creerMultiplicateur(2);
const tripler = creerMultiplicateur(3);
const quadrupler = creerMultiplicateur(4);

console.log(doubler(4));
console.log(tripler(4));
console.log(quadrupler(4));
