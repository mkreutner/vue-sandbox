export const functionsPlayerground = () => {
  console.log(
    " Welcome to Functions Playground.\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
  );

  //#region 01
  // Declaration
  function func01() {
    console.log("Exec func01");
  }

  // Expression
  const fn02 = function func02() {
    console.log("Exec func02");
  };

  const fn03 = function () {
    console.log("Exec unamed");
  };

  func01();
  func01();
  func01();

  console.log("---------------------");

  fn02();
  fn03();

  console.log("---------------------");

  console.log(fn02.name);
  console.log(fn03.name);

  console.log("---------------------");

  console.log(fn02);
  //#endregion

  //#region 02

  function fn04(param = "default") {
    // param = param || 'default';
    // if (!param) {
    //     param = 'default'
    // }
    console.log(param.toUpperCase());
  }

  console.log("---------------------");

  fn04("Toto");
  fn04();

  //#endregion

  //#region 03
  function addOldSchool() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  function addNewSchool(...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  function calculator(operator, ...numbers) {
    console.log(operator);
    console.log(numbers);
    let res = numbers[0];
    switch (operator) {
      case "+":
        for (let i = 1; i < numbers.length; i++) {
          res += numbers[i];
        }
        break;
      case "-":
        for (let i = 1; i < numbers.length; i++) {
          res -= numbers[i];
        }
        break;
      case "*":
        for (let i = 1; i < numbers.length; i++) {
          res *= numbers[i];
        }
        break;
      case "/":
        for (let i = 1; i < numbers.length; i++) {
          res /= numbers[i];
        }
        break;
      default:
        res = "Unknown operator";
    }
    return res;
  }

  console.log(addOldSchool(1, 2, 3, 4));
  console.log(addNewSchool(1, 2, 3, 4));
  console.log(calculator("+", 1, 2, 3, 4));
  console.log(calculator("-", 1, 2, 3, 4));
  console.log(calculator("*", 1, 2, 3, 4));
  console.log(calculator("/", 1, 2, 3, 4));
  //#endregion

  //#region 04
  // about return
  //#endregion

  //#region 05

  //#endregion
};
