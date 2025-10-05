// main.js

// Importation nommée
import { testFn } from "./src/index.js";

console.log(testFn(5));
console.log(testFn(5.555));
console.log(testFn(3.333333333333));
console.log(testFn(9.9999999999));
console.log(testFn(undefined));
console.log(testFn(null));
console.log(testFn("Bob"));
