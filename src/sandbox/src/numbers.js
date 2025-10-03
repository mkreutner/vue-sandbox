export const numberDeclaration = () => {
  console.log("Welcome to Number Declaration.");

  const firstNumber = 42;
  const objectNumberNumber = new Number(42);
  const objectStringNumber = new Number("666");
  const limitedNumber = 0.1 + 0.2;

  console.log(firstNumber);
  console.log(objectNumberNumber);
  console.log(objectStringNumber);
  console.log(limitedNumber);

  console.log(objectStringNumber.toExponential());
  console.log(objectStringNumber.toPrecision(1));
  console.log(objectStringNumber.toPrecision(2));
  console.log(objectStringNumber.toPrecision(3));
  console.log(objectStringNumber.toPrecision(4));
  console.log(objectStringNumber.toPrecision(5));
  console.log(objectStringNumber.toPrecision(6));
  console.log(objectStringNumber.toPrecision(7));
  console.log(objectStringNumber.toPrecision(100)); // max precision available : range from 1 to 100

  const decimalNumber = 42.73;
  const priceRaw = 1000000;
  const priceSci = 1e6;

  if (priceRaw === priceSci) {
    console.log("Same value:", priceRaw, priceSci);
  }

  // workaround when not obtain the real value with decimal number
  console.log(0.1 + 0.2);
  console.log((0.1 * 10 + 0.2 * 10) / 10);

  console.log(decimalNumber);

  console.log("Power:", 2 ** 3);
  console.log("Power with math;", Math.pow(2, 3));

  console.log(Number("42px"));
  console.log(parseInt("100010101", 2));
  console.log(parseInt("73px", 16));
  console.log(parseInt("73px", 10));
  console.log(parseInt("73.42", 10));
  console.log(parseFloat("73.42", 10));
  console.log(parseFloat("73", 10));

  console.log(+"48"); // quick tips to convert string to number, add '+' before string
  console.log(+"48" + 1);
  console.log(1 + "48"); // Display: 143
  console.log(1 + +"48"); // Display: 49 (48 is transform to number and added to 1 -> 49)

  // Methods of Number
  const primitiveNumber = 1.4242424273;
  const objectNumber = new Number(1);
  console.log("Primitive", primitiveNumber);
  console.log("Object", objectNumber);

  console.log(primitiveNumber.toFixed(3));
  console.log(typeof primitiveNumber);
  console.log(typeof objectNumber);

  console.log(primitiveNumber.toFixed(3));
  console.log(primitiveNumber.toPrecision(3));
  console.log(primitiveNumber.toExponential());
  console.log(typeof primitiveNumber.toString());
  console.log(typeof primitiveNumber.valueOf());
  console.log((3.14).toFixed(3));

  const myPi = Math.PI;
  console.log(myPi.toExponential());
  console.log(Math.ceil(myPi));
  console.log(Math.floor(myPi));
  console.log(Math.round(myPi));
  console.log(Math.max(1, 2, 3, 42));
  console.log(Math.round(Math.random() * 100) % 5);
};
