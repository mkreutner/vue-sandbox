// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(testFn({ a: 1, b: 42 }));
console.log(testFn({ a: 1, b: 42, c: { u: "u", z: 42 } }));
