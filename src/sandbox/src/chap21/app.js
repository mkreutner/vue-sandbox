import "./styles.css";

const baseUrl = "https://my-json-server.typicode.com/mkreutner/data-mock/";

const runL159 = false; // Déclaration d'une classe
const runL160 = false; // L'héritage avec les classes
const runL161 = false; // Les méthodes statiques
const runL162 = false; // Les propriétés privés
const runL163 = false; // Les champs publics
const runL164 = false; // Etendre les objets natifs avec extends
const runL165 = false; // L'opératuer instanceof
const runL166 = true; // Les mixins

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
  // With constructor function
  /*
  function Car() {}
  Car.description = function () {
    console.log("Build a new Car");
  };

  Car.description();

  const car = new Car();

  // car.description(); // throw an error : app.js:120 Uncaught TypeError: car.description is not a function
  */

  // With a class
  class Vehicule {
    hasEngine = true;

    static description() {
      console.log("Build a new Vehicule");
    }
  }

  class Car extends Vehicule {
    static compare(v1, v2) {
      return v1 === v2;
    }
  }

  Car.description();

  const car1 = new Car();
  const car2 = new Car();

  console.log(Car.compare(car1, car2));

  // car1.description(); // throw an error : app.js:120 Uncaught TypeError: car.description is not a function

  console.log(Car.__proto__ === Vehicule);
  console.log(car1.__proto__ === Car.prototype);
  console.log(car1.__proto__.__proto__ === Vehicule.prototype);
}
//#endregion

//#region Les propriétés privés
if (runL162) {
  class Car {
    //#region Private properties
    #keyIn;
    #engineState;
    #gazLevel;

    #maxGazLevel = 80;
    //#endregion

    //#region Constructor
    constructor() {
      this.#keyIn = false;
      this.#engineState = false;
      this.#gazLevel = 0;
    }
    //#endregion

    //#region Public methods
    toString() {
      return `Car status:
        key    is ${this.#keyIn ? "IN" : "OUT"}
        engine is ${this.#engineState ? "STARTED" : "STOPED"}
        gaz    is ${this.#gazLevel} / ${this.#maxGazLevel}
      `;
    }

    fillTank(quantity) {
      this.#gazLevel +=
        quantity + this.#gazLevel <= this.#maxGazLevel
          ? quantity
          : this.#maxGazLevel - this.#gazLevel;
    }

    insertKey() {
      this.#keyIn = true;
    }

    removeKey() {
      if (this.#engineState) {
        throw new Error("You must stop engine first");
      }
      this.#keyIn = false;
    }

    start() {
      if (this.#keyIn) {
        if (this.#engineState) {
          console.log("Engine is already started");
          return;
        }
        if (this.#gazLevel > 0) {
          this.#startEngine();
        } else {
          throw new Error("No gaz in tank");
        }
      } else {
        throw new Error("No key inserted");
      }
    }

    stop() {
      if (!this.#engineState) {
        console.log("Engine is already started");
        return;
      }
      this.#stopEngine();
    }

    move(distance = 1) {
      if (!this.#keyIn || !this.#engineState) {
        throw new Error("You must start engine first");
      }
      this.#gazLevel -= distance;
    }
    //#endregion

    //#region private methods
    #startEngine() {
      this.#engineState = true;
    }
    #stopEngine() {
      this.#engineState = false;
    }
    //#endregion
  }

  const car = new Car();
  car.fillTank(10);
  console.log(car.toString());
  car.fillTank(20);
  console.log(car.toString());
  car.fillTank(30);
  console.log(car.toString());
  car.fillTank(40);
  console.log(car.toString());
  car.insertKey();
  console.log(car.toString());
  car.start();
  console.log(car.toString());
  car.start();
  console.log(car.toString());
  car.start();
  console.log(car.toString());
  car.move();
  console.log(car.toString());
  car.move(10);
  console.log(car.toString());
  car.stop();
  console.log(car.toString());
  car.removeKey();
  console.log(car.toString());
}
//#endregion

//#region Les champs publics
if (runL163) {
  const prefix = "class";

  class Car {
    brand = "Tesla";
    engine = true;
    wheels;
    [`${prefix}Color`] = "red";
  }

  const car = new Car();
  console.log(car.brand);
  console.log(car.engine);
  console.log(car.wheels);
  console.log(car.classColor);
}
//#endregion

//#region Etendre les objets natifs avec extends
if (runL164) {
  class ExtendedArray extends Array {
    random() {
      const length = this.length;
      let i = 0;
      while (i < length) {
        this[i] = Math.round(Math.random() * 10);
        i++;
      }
    }
  }

  const arr = new ExtendedArray(1, 2, 3, 4, 5, 6, 7, 8, 9);
  arr.random();
  console.log(arr);
}
//#endregion

//#region L'opératuer instanceof
if (runL165) {
  class Car {}
  const car = new Car();
  console.log(car instanceof Object);
  console.log(car instanceof Car);
}
//#endregion

//#region Les mixins
if (runL166) {
  const options = {
    startRadio() {
      console.log("start radio");
    },
    stopRadio() {
      console.log("stop radio");
    },
  };

  class Car {}
  Object.assign(Car.prototype, options);
  class Bus {}
  Object.assign(Bus.prototype, options);
  class Plane {}
  Object.assign(Plane.prototype, options);

  const car = new Car();
  const bus = new Bus();
  const plane = new Plane();

  console.log(car, bus, plane);

  car.startRadio();
  car.stopRadio();
}
//#endregion
