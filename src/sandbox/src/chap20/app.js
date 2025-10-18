import "./styles.css";

const baseUrl = "https://my-json-server.typicode.com/mkreutner/data-mock/";

const runL148 = false; // Objectifs et description des propriétés d'un objet
const runL149 = false; // Les accesseurs et les mutateurs
const runL150 = false; // La POO et les constructeurs
const runL151 = false; // Introduction aux prototypes
const runL152 = false; // Le pattern constructeur et la propriété prototype
const runL153 = false; // Les prototypes natifs
const runL154 = false; // Utilisation des prototypes
const runL155 = false; // API d'Object
const runL156 = false; // Les Maps
const runL157 = false; // Les Sets
const runL158 = true; // La méthode groupBy()

//#region Objectifs et description des propriétés d'un objet
if (runL148) {
  const obj = {
    key: "value",
    first: "1",
    second: "34",
  };

  console.log(obj);
  obj.first = "1: updated value";
  console.log(obj);

  //   console.log(Object.keys(obj));
  //   console.log(Object.values(obj));
  //   console.log(Object.entries(obj));

  // Retreive properties of a key
  let descriptorOfFirst = Object.getOwnPropertyDescriptor(obj, "first");
  console.log(descriptorOfFirst);
  // Change properties
  Object.defineProperty(obj, "first", {
    writable: false,
  });
  // Retreive properties of a key
  descriptorOfFirst = Object.getOwnPropertyDescriptor(obj, "first");
  console.log(descriptorOfFirst);

  // console.log(obj);
  // obj.first = "2: updated value"; // Now an error is throw : Uncaught TypeError: Cannot assign to read only property 'first' of object '#<Object>'
  // console.log(obj);

  // Change properties
  Object.defineProperty(obj, "first", {
    enumerable: false,
  });
  // Retreive properties of a key
  descriptorOfFirst = Object.getOwnPropertyDescriptor(obj, "first");
  console.log(descriptorOfFirst);

  for (let k in obj) {
    console.log(`${k} has the value ${obj[k]}`); // first key is not listed
  }
}
//#endregion

//#region Les accesseurs et les mutateurs
if (runL149) {
  const user = {
    firstname: "John",
    lastname: "Doe",
    getFullname: function () {
      return `${this.firstname} ${this.lastname}`;
    },
    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
    set fullname(value) {
      let lostData;
      [this.firstname, this.lastname, ...lostData] = value.split(" ");
    },
  };

  // Simple but little bit boring ...
  console.log(`${user.firstname} ${user.lastname}`);
  // Not friendly ...
  console.log(user.getFullname());
  // Assessors
  console.log(user.fullname);
  user.fullname = "Jane Doe"; // throw error if set is not define ; Uncaught TypeError: Cannot set property fullname of #<Object> which has only a getter
  console.log(user.fullname);
  user.fullname =
    "Xavier Niel fait fortune dans le Minitel rose à la fin des années 1980. C'est le fondateur de Iliad"; // throw error ; Uncaught TypeError: Cannot set property fullname of #<Object> which has only a getter
  console.log(user.fullname);
  console.log(user);

  const userFullNameDesc = Object.getOwnPropertyDescriptor(user, "fullname");
  console.log(userFullNameDesc);

  Object.defineProperty(user, "fullname2", {
    set: function (value) {
      this.fullname = value;
    },
    get: function () {
      return this.fullname;
    },
  });

  user.fullname2 = "thomas edison";
  console.log(user.fullname2);
}
//#endregion

//#region La POO et les constructeurs
if (runL150) {
  // long and unreliable
  //   const car01 = {
  //     brand: "Mercedes",
  //     model: "GLC",
  //     wheels: 4,
  //     hasEngine: true,
  //   };
  //   const car02 = {
  //     brand: "DS",
  //     model: "8",
  //     wheels: 4,
  //     hasEngine: true,
  //   };

  // use contructor !
  function Car(brand, model, wheels, hasEngine) {
    this.brand = brand;
    this.model = model;
    this.wheels = wheels;
    this.hasEngine = hasEngine;

    this.start = () => {
      console.log(`${this.brand} - ${this.model} is started.`);
    };

    this.stop = () => {
      console.log(`${this.brand} - ${this.model} is stoped.`);
    };
  }

  const car01 = new Car("Mercedes", "GLC", 4, true);
  const car02 = new Car("DS", "8", 4, true);

  console.log(car01);
  console.log(car02);
  car01.start();
  car02.stop();
}
//#endregion

//#region Introduction aux prototypes
if (runL151) {
  const Person = {
    legs: 2,
    arms: 2,
    eyes: 2,
    speak() {
      return "nothing!";
    },
  };

  const Man = {
    sex: "Male",
    speak() {
      return "just what you need...";
    },
  };

  const Woman = {
    sex: "Female",
    speak() {
      return "sometimes a little too much...";
    },
  };

  const ThirdSex = {
    sex: "Unknown",
  };

  Man.__proto__ = Person;
  Woman.__proto__ = Person;
  ThirdSex.__proto__ = Person;

  console.log(Man);
  console.log(Woman);
  console.log(ThirdSex);
  console.log(Man.speak());
  console.log(Woman.speak());
  console.log(ThirdSex.speak());

  console.log("-= Man =-");
  for (let k in Man) {
    console.log(
      k,
      Man.hasOwnProperty(k) ? "In Man Object" : "Inherited from Person"
    );
  }

  console.log("-= Woman =-");
  for (let k in Woman) {
    console.log(
      k,
      Woman.hasOwnProperty(k) ? "In Woman Object" : "Inherited from Person"
    );
  }

  console.log("-= ThirdSex =-");
  for (let k in ThirdSex) {
    console.log(
      k,
      ThirdSex.hasOwnProperty(k)
        ? "In ThirdSex Object"
        : "Inherited from Person"
    );
  }
}
//#endregion

//#region Le pattern constructeur et la propriété prototype
if (runL152) {
  const vehicule = {
    hasEngine: true,
    start() {
      console.log("Started!");
    },
  };

  function Car(brand) {
    this.brand = brand;
  }
  Car.prototype = vehicule;
  Car.prototype.constructor = Car;

  const myCar = new Car("Lada");
  const myCar2 = new myCar.__proto__.constructor("Dacia");

  console.log(myCar);
  console.log(myCar2);
  console.log(myCar.__proto__.constructor === Car);
  console.log(myCar2.__proto__.constructor === Car);
}
//#endregion

//#region Les prototypes natifs
if (runL153) {
  // Theory about native prototype.
}
//#endregion

//#region Utilisation des prototypes
if (runL154) {
  const vegetable = {
    isEdible: true,
  };

  // old school
  // const patato = {};
  // patato.__proto__ = vegetable;

  // new way
  //   const patato = Object.create(vegetable, {
  //     origine: {
  //       value: "belgium",
  //       writable: true,
  //       enumerable: true,
  //       configurable: true,
  //     },
  //   });
  //   console.log(Object.getPrototypeOf(patato));

  const patato = { origine: "belgium" };
  console.log(Object.getPrototypeOf(patato));
  Object.setPrototypeOf(patato, vegetable);
  console.log(Object.getPrototypeOf(patato));
}
//#endregion

//#region API d'Object
if (runL155) {
}
//#endregion

//#region Les Maps
if (runL156) {
  const myMap = new Map();
  const user = { id: 123456789, name: "John Doe" };
  const func = () => "Crazy!";

  myMap.set("stringKey", "valueString");
  myMap.set(user, "order-459875641");
  myMap.set(func, "Incredible!");

  console.log(myMap);
  console.log(myMap.get("unknown"));
  console.log(myMap.get("stringKey"));
  console.log(myMap.get(user));
  console.log(myMap.get(func));
  console.log(myMap.size);

  myMap.delete("stringKey");
  console.log(myMap);
  console.log(myMap.has("stringKey"));

  console.log(myMap.keys());
  console.log(myMap.values());

  for (let k of myMap.keys()) {
    console.log(k);
    console.log(myMap.get(k));
  }

  for (let v of myMap.values()) {
    console.log(v);
  }

  for (let [k, v] of myMap.entries()) {
    console.log(`ENTRIE\t:\t${k}\t\t===>\t${v}`);
  }

  myMap.forEach((v, k) => {
    console.log(`EACH\t:\t${k}\t\t===>\t${v}`);
  });

  myMap.clear();
  console.log(myMap);
}
//#endregion

//#region Les Sets
if (runL157) {
  const myArray = [1, 2, 3, 8, 9, 5, 9, 5, 9, 554, 7, 52, 25, 33, 42, 45];
  const mySet = new Set(myArray);

  console.log(myArray);
  console.log(mySet);

  mySet.add(8); // not added because already in set
  mySet.add(888); // added because not yet in set
  console.log(mySet);

  console.log(mySet.has(554)); // in : true
  console.log(mySet.has(1975)); // not in : false

  console.log(mySet.values());

  const myGuess = ["Paul", "Victor", "Igor", "Marie", "Louise", "Victor"];
  const mySetGuess = new Set(myGuess);
  console.log(myGuess);
  console.log(mySetGuess);
  console.log(Array.from(mySetGuess));

  mySet.clear();
  console.log(mySet);
}
//#endregion

//#region La méthode groupBy()
if (runL158) {
  const myNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const myEvensAndOdds = Object.groupBy(myNumbers, (item) =>
    item % 2 === 0 ? "even" : "odd"
  );
  console.log(myNumbers);
  console.log("Odds : ", myEvensAndOdds.odd);
  console.log("Evens: ", myEvensAndOdds.even);

  const mySeparate10 = Object.groupBy(myNumbers, (item) =>
    item <= 10 ? "le10" : "gt10"
  );
  console.log(myNumbers);
  console.log("gt10 : ", mySeparate10.gt10);
  console.log("le10: ", mySeparate10.le10);

  const { le10, gt10 } = Object.groupBy(myNumbers, (item) =>
    item <= 10 ? "le10" : "gt10"
  );
  console.log(myNumbers);
  console.log("gt10 : ", gt10);
  console.log("le10: ", le10);

  const users = [
    { name: "John", age: 12, gender: "M" },
    { name: "Tomas", age: 15, gender: "M" },
    { name: "Marie", age: 22, gender: "F" },
    { name: "Paule", age: 17, gender: "F" },
    { name: "Tina", age: 24, gender: "F" },
    { name: "Polo", age: 10, gender: "M" },
    { name: "Mike", age: 42, gender: "M" },
  ];

  const { minor, major } = Object.groupBy(users, (user) =>
    user.age >= 18 ? "major" : "minor"
  );
  const { men, women } = Object.groupBy(users, (user) =>
    user.gender === "M" ? "men" : "women"
  );
  const { beginWithP, others } = Object.groupBy(users, (user) =>
    user.name.startsWith("P") ? "beginWithP" : "others"
  );
  console.log(myNumbers);
  console.log("minor : ", minor);
  console.log("major: ", major);
  console.log("men : ", men);
  console.log("women: ", women);
  console.log("beginWithP : ", beginWithP);
  console.log("others: ", others);
}
//#endregion
