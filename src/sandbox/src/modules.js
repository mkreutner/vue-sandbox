import { sayGoodbye, pi, sayHello, FOOOOOOOO as toto } from "./libs/utils.js";

export const modulesPlayerground = () => {
  console.log(
    " Welcome to Modules Playground.\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
  );

  sayGoodbye();
  console.log(toto);
  sayHello();
  console.log(pi);
};
