export const arraysPlayerground = () => {
  console.log(
    " Welcome to Arrays Playground.\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
  );

  //#region Create an array
  // -- litteral
  const arr01 = [1, 2, "John", { foo: "bar" }, [4, 5, 6]];
  // Native function array
  const arr02 = Array(1, 2, 3);
  // Constructor
  const arr03 = new Array(4, 5, 6);
  // From iterable
  const arr04 = Array.from("Hello");
  // From iterable with callback
  const arr05 = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (i) => ({
    [i]: i ** 2,
  }));

  console.log(arr01);
  console.log(arr02);
  console.log(arr03);
  console.log(arr04);
  console.log(arr05);

  // Check if array
  console.log(Array.isArray(arr05));
  console.log(Array.isArray(arr01[2]));
  //#endregion

  //#region Arrays properties access
  const arrStarts = ["earth", "moon", "sun"];

  console.log(arrStarts);
  console.log(arrStarts[0]);
  console.log(arrStarts.length);

  // reset array
  // arrStarts.length = 0;
  // arrStarts["foo"] = "bar";

  console.log(arrStarts.at(-1)); // from the end
  console.log(arrStarts.at(1)); // from the start
  //#endregion

  //#region Nesting arrays
  const nestingArr = [
    ["Mercury"],
    ["Venus"],
    ["Earth", "Moon"],
    ["Mars", "Phobos", "Deimos"],
    ["Jupiter", "Io", "Europa", "Ganymede", "Calisto"],
    ["Saturn", "Mimas", "Enceladus", "Tethys", "Dione", "Rhea", "Titan"],
    ["Uranus", "Miranda", "Umbriel", "Titania", "Oberon"],
    ["Neptune", "Triton"],
  ];

  console.log(nestingArr[0]);
  console.log(nestingArr[0][0]);
  console.log(nestingArr.at(-1).at(-1)); // Last element of last sub-array -> Display Triton
  //#endregion

  //#region rest operator and arrays
  const arr06 = [[1, 2], 3, 4, [5, 6, 7, 8, 9, 0], 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const [e1, e2, e3, ...rest1] = arr06;

  console.log(e1);
  console.log(e2);
  console.log(e3);
  console.log(rest1);
  //#endregion

  //#region add elements in array
  let addElementInArray = [1, 2, 3];

  console.log(addElementInArray);
  addElementInArray[0] = "42";
  console.log(addElementInArray);
  addElementInArray.unshift([1, 2, 3]);
  console.log(addElementInArray);
  addElementInArray.unshift(-1, -2, -3);
  console.log(addElementInArray);
  addElementInArray.push(73, 4, 5);
  console.log(addElementInArray);
  // with spread operator, but use let rather than const
  addElementInArray = [...addElementInArray, 6, 6, 6];
  console.log(addElementInArray);
  addElementInArray = [8, 8, 8, 8, 8, ...addElementInArray, 6, 6, 6];
  console.log(addElementInArray);
  addElementInArray.splice(10, 0, 101, 102, 103, 140);
  console.log(addElementInArray);
  //#endregion

  //#region delete elements in array
  let delElementInArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(delElementInArray);
  delElementInArray.shift();
  console.log(delElementInArray);
  delElementInArray.pop();
  console.log(delElementInArray);

  const [, ...delElementInArray2] = delElementInArray;
  console.log(delElementInArray2);

  const delElementInArray3 = delElementInArray.splice(2, 2);
  console.log(delElementInArray);
  console.log(delElementInArray3);
  //#endregion

  //#region find elements in array
  const findElementInArray = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  console.log(findElementInArray);
  console.log(findElementInArray.at(findElementInArray.indexOf("five")));
  console.log(findElementInArray.includes("five"));
  console.log(findElementInArray.includes(5));

  const findElementInArray2 = [
    { name: "Earth", index: 1 },
    { name: "Moon", index: 1 },
    { name: "Sun", index: 1 },
    { name: "Earth", index: 2 },
    { name: "Sun", index: 2 },
    { name: "Earth", index: 3 },
  ];

  const idx = findElementInArray2.findIndex((e) => e.name === "Earth");
  const lastIdx = findElementInArray2.findLastIndex((e) => e.name === "Earth");
  console.log(idx);
  console.log(lastIdx);
  const elem = findElementInArray2.find((e) => e.name === "Earth");
  const lastElem = findElementInArray2.findLast((e) => e.name === "Earth");
  console.log(elem);
  console.log(lastElem);
  const isAny = findElementInArray2.some((e) => e.name === "Moon");
  console.log(isAny);
  const isAny2 = findElementInArray2.some((e) => e.name === "Pluton");
  console.log(isAny2);
  //#endregion

  //#region copy array
  const copyArray = [
    { name: "Earth", index: 1 },
    { name: "Moon", index: 1 },
    { name: "Sun", index: 1 },
    { name: "Earth", index: 2 },
    { name: "Sun", index: 2 },
    { name: "Earth", index: 3 },
  ];
  const copyOfCopyArray = copyArray;
  copyOfCopyArray.push({ name: "Earth", index: 4 });
  console.log(copyArray);
  console.log(copyOfCopyArray);

  const cpyFunc = (arr) => {
    arr.push({ name: "Copier", index: 1 });
  };

  cpyFunc(copyArray);
  console.log(copyArray);
  console.log(copyOfCopyArray);

  const deepCopyOfCopyArray = JSON.parse(JSON.stringify(copyArray));
  deepCopyOfCopyArray.push({ name: "Bidon", index: 1 });

  console.log(copyArray);
  console.log(copyOfCopyArray);
  console.log(deepCopyOfCopyArray);
  //#endregion

  //#region merge arrays
  const arrA = [
    { name: "Earth", index: 1 },
    { name: "Moon", index: 1 },
    { name: "Sun", index: 1 },
  ];
  const arrB = [
    { name: "Earth", index: 2 },
    { name: "Moon", index: 2 },
    { name: "Sun", index: 2 },
  ];
  const arrC = [
    { name: "Earth", index: 1 },
    { name: "Moon", index: 1 },
    { name: "Sun", index: 1 },
  ];

  const arrD = arrA.concat(arrB).concat(arrC);
  const arrE = [...arrA, ...arrB, ...arrC];
  console.log(arrA, arrB, arrC, arrD, arrE);
  //#endregion

  //#region sort arrays
  const arr0A = [
    { name: "Earth", index: 2 },
    { name: "Moon", index: 2 },
    { name: "Sun", index: 2 },
    { name: "Earth", index: 3 },
    { name: "Moon", index: 3 },
    { name: "Sun", index: 4 },
    { name: "Earth", index: 5 },
    { name: "Moon", index: 6 },
    { name: "Sun", index: 7 },
  ];

  console.log(arr0A);
  arr0A.sort((a, b) => a.name.localeCompare(b.name) && a.index - b.index);
  console.log(arr0A);
  //#endregion

  //#region Functional programmation intro
  const fpArr = ["ONE", "TWO", "THREE", "FOUR", "FIVE"];
  const fpArr2 = [
    { name: "Pear", quantity: 100, unitPrice: 1.15 },
    { name: "Apple", quantity: 75, unitPrice: 1.25 },
    { name: "Tomato", quantity: 80, unitPrice: 0.5 },
    { name: "Cherry", quantity: 600, unitPrice: 0.25 },
    { name: "Banana", quantity: 75, unitPrice: 1.0 },
    { name: "Garlic", quantity: 80, unitPrice: 0.5 },
  ];

  const fpArrLower = fpArr.map((e) => e.toLowerCase());
  const fpArr2_Less1 = fpArr2
    .filter((e) => e.unitPrice < 1.0)
    .map((e) => ({ ...e, name: e.name.toUpperCase() }));

  console.log(fpArr);
  console.log(fpArrLower);
  console.log(fpArr2);
  console.log(fpArr2_Less1);
  //#endregion
};
