import "./styles.css";

const baseUrl = "https://my-json-server.typicode.com/mkreutner/data-mock/";

const runL159 = false; // Déclaration d'une classe
const runL160 = true; // L'héritage avec les classes
const runL161 = false; // Les méthodes statiques
const runL162 = false; // Les propriétés privés
const runL163 = false; // Les champs publics
const runL164 = false; // Etendre les objets natifs avec extends
const runL165 = false; // L'opératuer instanceof
const runL166 = false; // Les mixins

//#region Déclaration d'une classe
if (runL159) {
  // With constructor function
  function Bar(name) {
    this.name = name;
  }

  Bar.prototype.hello = function () {
    console.log(`Hello ${this.name}!`);
  };
  Bar.prototype.goodbye = function () {
    console.log(`Goodbye ${this.name}!`);
  };

  // Using class
  class MyFirstClass {
    constructor(name) {
      this.name = name;
    }

    hello() {
      console.log(`Hello ${this.name}!`);
    }

    goodbye() {
      console.log(`Goodbye ${this.name}!`);
    }
  }

  const myBar = new Bar("Mickey");
  myBar.hello();
  myBar.goodbye();
  const myFirstInstance = new MyFirstClass("Mickey");
  myFirstInstance.hello();
  myFirstInstance.goodbye();

  console.log(myBar);
  console.log(myFirstInstance);
}
//#endregion

//#region L'héritage avec les classes
if (runL160) {
  // With constructor function
  /*
  function Vehicule() {
    this.hasEngine = true;
  }
  Vehicule.prototype.stop = function () {
    console.log("Engine stoped");
  };

  // Heritage
  function Car() {
    Vehicule.call(this);
    this.wheels = 4;
  }
  Car.prototype = Object.create(Vehicule.prototype);
  Car.prototype.constructor = Car;
  Car.prototype.start = function () {
    console.log("Car starts");
  };

  const car = new Car();

  console.log(car);
  */

  // With classes <3
  class Vehicule {
    constructor() {
      this.hasEngine = true;
    }
    stop() {
      console.log("Engine stoped");
    }
  }

  class Car extends Vehicule {
    constructor() {
      super();
      this.wheels = 4;
    }
    start() {
      console.log("Car starts");
    }
  }

  const car = new Car();

  console.log(car);
}
//#endregion

//#region Les méthodes statiques
if (runL161) {
}
//#endregion

//#region Les propriétés privés
if (runL162) {
}
//#endregion

//#region Les champs publics
if (runL163) {
}
//#endregion

//#region Etendre les objets natifs avec extends
if (runL164) {
}
//#endregion

//#region L'opératuer instanceof
if (runL165) {
}
//#endregion

//#region Les mixins
if (runL166) {
}
//#endregion
