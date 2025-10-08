(function () {
  function sayHello() {
    console.log(" LIB says Hello !");
  }

  setTimeout(() => {
    sayHello();
  }, 1000);
})();
