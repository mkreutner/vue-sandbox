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

// End of the code
