export const stringPlayerground = () => {
  console.log("Welcome to String Playground.\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

  const firstString = "Sun";
  const secondString = String(42);
  const thirdString = new String("An other way to declare string.");

  console.log(firstString);
  console.log(secondString);
  console.log(thirdString);
  console.log(thirdString.toLocaleUpperCase().replaceAll("A", "*"));

  // template litteral
  const tlA = "one";
  const tlB = "two";

  const tlC = `I am a
  
  characters string

  and include ${tlA} and ${tlB}

  `;

  console.log(tlA);
  console.log(tlB);
  console.log(tlC);
};
