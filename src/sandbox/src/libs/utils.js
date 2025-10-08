// ECMAScript import / export system
export const sayHello = () => {
  console.log("Hello!");
};
export const pi = 3.14159;

const sayGoodbye = () => {
  console.log("Goodbye!");
};
const foo = "bar";

export { foo as FOOOOOOOO, sayGoodbye };

const aziz = () => {
  console.log("Lumière !");
};

export default { aziz };
