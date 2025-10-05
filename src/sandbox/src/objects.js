export const objectsPlayerground = () => {
  console.log("Welcome to String Playground.\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

  // Declare object
  const objA = {};
  const objB = Object();
  const objC = new Object();

  console.log(objA);
  console.log(objB);
  console.log(objC);

  // properties of objects
  const earth = {
    population: 7e7,
    satellite: "Moon",
    temperature: {
      min: -70,
      max: 60,
    },
    isOld: false,
    getTemperature: function () {
      return this.temperature;
    },
    getPopulation() {
      return this.population;
    },
  };

  console.log(earth);
  console.log(earth.population);
  console.log(earth["population"]);

  const property = "temperature";
  console.log(earth[property]);

  const twinEarth = earth; // copy adress on the heap.
  twinEarth.isOld = true; // set value of earth.isOld to true too.
  console.log(earth); // display changed earth!
  console.log(earth.getTemperature());
  console.log(earth.getPopulation());

  //
  const prop01 = "titi";
  const prop02 = "toto";
  const prop03 = "tutu";
  const prop04 = {
    sub01: "sub01",
    sub02: "sub02",
  };

  const pp = "prop01";

  const objD = {
    [pp]: prop01,
    prop02,
    prop03,
    prop04,
    prop05: "050505",
  };

  console.log(objD);

  // Object decomposition
  const dataObject = {
    elemCount: 4,
    pageCount: 5,
    curPage: 3,
    elements: [
      { height: 10, width: 11 },
      { height: 20, width: 12 },
      { height: 30, width: 13 },
      { height: 40, width: 14 },
    ],
  };

  console.log(dataObject);

  // old school
  //const elemCount = dataObject.elemCount;
  //const pageCount = dataObject.pageCount;
  //const curPage = dataObject.curPage;

  // new style
  const elemCount = 50;
  const { elemCount: elemCountObj, ...reste } = dataObject; // spread operator ...<name_of_recipient>
  console.log(elemCount, elemCountObj, reste);

  // is key exist?
  if (dataObject.elemCount) {
    console.log("ok");
  } else {
    console.log("ko");
  }

  if ("elemCount" in dataObject) {
    console.log("ok");
  } else {
    console.log("ko");
  }

  if (dataObject.hasOwnProperty("notIn")) {
    console.log("ok");
  } else {
    console.log("ko");
  }

  // remove or sidelining a property
  dataObject.pageCount = null;
  console.log(dataObject);
  const { pageCount, ...dataObjectWithoutElemCount } = dataObject;
  console.log(dataObjectWithoutElemCount);
  delete dataObject.pageCount;
  console.log(dataObject);

  // merge two objects
  const firstObj = {
    key01: "firstObj-key01",
    key02: "firstObj-key02",
  };
  const secondObj = {
    key03: "secondObj-key03",
    key04: "secondObj-key04",
  };

  console.log(firstObj);
  console.log(secondObj);
  console.log(firstObj + secondObj);
  console.log({ ...firstObj, ...secondObj }); // spreading all objects
  console.log(Object.assign({}, firstObj, secondObj)); // create a new reference, without {} firstOject is altered.

  // Compare objects
  const compA = {
    test: "123",
  };
  const compB = {
    test: "123",
  };
  const compC = compA;
  console.log(compA === compB); // false
  console.log(compA === compC); // true

  // Objects iteration
  const iterA = {
    key01: "value01",
    key02: "value02",
    key03: "value03",
    key04: "value04",
    key05: "value05",
  };
  console.log(iterA);
  for (let prop in iterA) {
    console.log(prop, iterA[prop]);
  }
  console.log(Object.keys(iterA));
  console.log(Object.values(iterA));
  console.log(Object.entries(iterA));

  // JASON Statam :p
  const jasonData = `
  {
    "firstName": "Jason",
    "lastName": "Doe",
    "age": "42",
    "nationality": "french"
  }
  `;
  const jasonObject = JSON.parse(jasonData); // Json -> Javascript object
  const jasonDataNew = JSON.stringify(jasonObject); // Javascript object -> Json
  console.log(jasonData);
  console.log(jasonObject);
  console.log(jasonDataNew);

  // Object copy
  const duck = {
    firstName: "Daffy",
    lastName: "Duck",
    gender: "Male",
    age: "88",
    parents: {
      first: "Tex Avery",
      second: "Bob Clampett",
    },
  };

  // Shallow copy
  const firstCopyOfDuck = Object.assign({}, duck);
  const secondCopyOfDuck = { ...duck };
  // Deep
  const thirdCopyOfDuck = JSON.parse(JSON.stringify(duck));

  firstCopyOfDuck.firstName = "Igor";
  firstCopyOfDuck.parents.first = "Zapata";

  console.log(duck);
  console.log(firstCopyOfDuck);
  console.log(secondCopyOfDuck);
  console.log(thirdCopyOfDuck);
};
