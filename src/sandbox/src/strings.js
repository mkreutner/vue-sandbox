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

  const earth = "Earth";

  for (let i = 0; i < earth.length; i++) {
    console.log(earth[i]);
  }

  // Methods of String objects
  const initialString = new String("My tailor is rich.");
  const char0 = initialString.charAt(0);
  const isFinishedByADot = initialString.endsWith(".");
  const isStartedByMy = initialString.startsWith("My");
  const indexOfIS = initialString.indexOf("is");
  const isPoor = initialString.replace("is", "is not");
  const sliceOfInitialString = initialString.slice(3, 9);

  console.log(char0);
  console.log(isFinishedByADot);
  console.log(isStartedByMy);
  console.log(indexOfIS);
  console.log(initialString);
  console.log(isPoor);
  console.log(sliceOfInitialString);
  console.log("                 kadsjgf   klasdjfg            ".trim());
  console.log("banana,apple,pear,stawberry".split(","));

  console.log(
    "Dyma is very an excellent learning platform".split("").reverse().join("")
  );
  console.log(
    "Dyma is very an excellent learning platform"
      .replace("very", "the")
      .replace("an excellent", "best")
      .concat(" that I know!")
  );
};
