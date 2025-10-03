// Variable declarations
var firstName;
var lastName;
var age;
var city;

// Use the variables before assignment
console.log(
  "Before assignment: " +
    firstName +
    " " +
    lastName +
    ", Age: " +
    age +
    ", City: " +
    city
);
// Output: Before assignment: undefined undefined, Age: undefined, City: undefined

// Assign values to variables
firstName = "John";
lastName = "Doe";
age = 30;
city = "New York";

// Use the variables in a sentence
console.log(
  "My name is " +
    firstName +
    " " +
    lastName +
    ". I am " +
    age +
    " years old and I live in " +
    city +
    "."
);
// Output: My name is John Doe. I am 30 years old and I live in New York.

// Stack And Heap Memory Example
function createPerson(firstName, lastName, age, city) {
  // Primitive types are stored in stack memory
  var person = {
    // Objects are stored in heap memory
    firstName: firstName,
    lastName: lastName,
    age: age,
    city: city,
  };
  return person;
}

var person1 = createPerson("Alice", "Smith", 28, "Los Angeles");
var person2 = createPerson("Bob", "Johnson", 35, "Chicago");

console.log(person1); // Output: { firstName: 'Alice', lastName: 'Smith', age: 28, city: 'Los Angeles' }
console.log(person2); // Output: { firstName: 'Bob', lastName: 'Johnson', age: 35, city: 'Chicago' }

// Demonstrating stack memory with primitive types
var x = 10; // x is stored in stack memory
var y = x; // y is a copy of x, also stored in stack memory
y = 20; // Changing y does not affect x

console.log("x:", x); // Output: x: 10
console.log("y:", y); // Output: y: 20

// Demonstrating heap memory with objects
var obj1 = { value: 10 }; // obj1 is a reference to an object in heap memory
var obj2 = obj1; // obj2 references the same object as obj1
obj2.value = 20; // Changing obj2 affects obj1 since they reference the same object

console.log("obj1.value:", obj1.value);
// Output: obj1.value: 20
console.log("obj2.value:", obj2.value);
// Output: obj2.value: 20

// Coalescing Operator Example
var undefinedVar;
var nullVar = null;
var zeroVar = 0;
var emptyStringVar = "";

// Using the nullish coalescing operator (??)
var result1 = undefinedVar ?? "Default Value"; // Returns "Default Value"
var result2 = nullVar ?? "Default Value"; // Returns "Default Value"
var result3 = zeroVar ?? 42; // Returns 0 (zero is not null or undefined)
var result4 = emptyStringVar ?? "Fallback"; // Returns "" (empty string is not null or undefined)

console.log(result1); // Output: Default Value
console.log(result2); // Output: Default Value
console.log(result3); // Output: 0
console.log(result4); // Output: ""

// Using the logical OR operator (||) for comparison
var orResult1 = undefinedVar || "Default Value"; // Returns "Default Value"
var orResult2 = nullVar || "Default Value"; // Returns "Default Value"
var orResult3 = zeroVar || 42; // Returns 42 (zero is falsy)
var orResult4 = emptyStringVar || "Fallback"; // Returns "Fallback" (empty string is falsy)

console.log(orResult1); // Output: Default Value
console.log(orResult2); // Output: Default Value
console.log(orResult3); // Output: 42
console.log(orResult4); // Output: Fallback

let debug = true;
debug && console.log("Debugging is enabled");
debug = false;
debug && console.log("This will not be logged");

// ternary operator example
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount:", discount); // Output: Discount: 0.1

isMember = false;
discount = isMember ? 0.1 : 0;
console.log("Discount:", discount); // Output: Discount: 0

const newAge = 10;
const beverage = newAge >= 18 ? "Beer" : "Juice";
console.log(beverage); // Output: Juice
const stupidValue = newAge < 18 ? true : "Juice";
console.log(stupidValue); // Output: true

// Switch statement example
const wheel = "4";
let vehicleType;
switch (wheel) {
  case 1: {
    vehicleType = "Unicycle";
    break;
  }
  case 2: {
    vehicleType = "Bicycle";
    break;
  }
  case 3: {
    vehicleType = "Tricycle";
    break;
  }
  case 4:
  case "4": {
    vehicleType = "Car";
    break;
  }
  default: {
    vehicleType = "Unknown vehicle type";
    break;
  }
}
console.log(vehicleType); // Output: Car

// for loop example
for (let i = 0; i < 50; i++) {
  if (i % 10 === 0) {
    continue; // Skip multiples of 10
  }
  if (i === 25) {
    break; // Exit the loop when i is 25
  }
  console.log("Iteration:", i);
}

// for...of loop example
const array = ["apple", "banana", "cherry"];
for (const fruit of array) {
  console.log("Fruit:", fruit);
}
// Output: Fruit: apple
//         Fruit: banana
//         Fruit: cherry

// for...in loop example
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
for (const key in person) {
  console.log(key + ": " + person[key]);
}

// Output: name: Alice
//         age: 30
//         city: New York

// Using Object.entries with for...of loop
for (const [key, val] of Object.entries(person)) {
  console.log(key + ": " + val);
}
// Output: name: Alice
//         age: 30
//         city: New York

// while loop example
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}
// Output: Count: 0
//         Count: 1
//         Count: 2
//         Count: 3
//         Count: 4

// do...while loop example
let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 3);
// Output: Number: 0
//         Number: 1
//         Number: 2

// while loop with break and continue
let n = 0;
while (n < 10) {
  if (n % 2 === 0) {
    n++;
    continue; // Skip even numbers
  }
  if (n === 7) {
    break; // Exit the loop when n is 7
  }
  console.log("Odd Number:", n);
  n++;
}
// Output: Odd Number: 1
//         Odd Number: 3
//         Odd Number: 5
// End of the code
