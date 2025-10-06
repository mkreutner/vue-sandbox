// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(testFn({ a: -2 }, { a: 2 }, { b: 42 }));
console.log(testFn({ a: 1 }, { b: 2 }, { c: 3 }));
