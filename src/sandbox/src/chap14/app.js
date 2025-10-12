import "./styles.css";

const runL101 = false; // Introduction à l'asynchrone et timers
const runL102 = false; // Les promesses (Promises always promises :D)
const runL103 = false; // Chaîner les promesses (Unleash the promises :D)
const runL104 = true; // Le méthodes des promesses

//#region Introduction à l'asynchrone et timers
if (runL101) {
  const timeoutId = setTimeout(() => {
    console.log("Timer is enlapsed");
  }, 3000);

  console.log(timeoutId);
  setTimeout(() => {
    console.log("Delete the Timer");
    clearTimeout(timeoutId);
  }, 2000);

  const maxInterval = 10;
  let currentInterval = 0;
  const everyTimerId = setInterval(() => {
    if (currentInterval < maxInterval) {
      console.log(
        `[${everyTimerId}] - In progress ... ${currentInterval} / ${maxInterval}`
      );
    } else {
      console.log(`[${everyTimerId}] - Bye! See you soon ...`);
      clearInterval(everyTimerId);
    }
    currentInterval += 1;
  }, 1000);
}
//#endregion

//#region Promesses
if (runL102) {
  const maxIntervalCounter = 5;
  let intervalCounter = 0;

  const interval = setInterval(() => {
    const firstPromise = new Promise((resolve, reject) => {
      var random_boolean = Math.random() < 0.5;
      if (random_boolean === true) {
        resolve("It's OK!");
      } else {
        reject("It's KO :-(");
      }
    });

    intervalCounter++;
    if (intervalCounter > maxIntervalCounter) {
      clearInterval(interval);
    } else {
      console.log(
        `intervale [${interval}]: ${intervalCounter} / ${maxIntervalCounter}`
      );
    }

    console.log(
      firstPromise
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
    );

    console.log("Not blocked script ....");
    console.log("Not blocked script ....");
    console.log("Not blocked script ....");
    console.log("Not blocked script ....");
    console.log("Not blocked script ....");
  }, 1000);

  /** Not easy to read
  console.log(
    firstPromise.then(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    )
  );
  */
}
//#endregion

//#region Chaîner les promesses
if (runL103) {
  const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("Timeout OK!");
      reject("Outch, outch, outch !");
    }, 3000);
  });

  /*
  firstPromise.then((result) => {
    console.log(`firstPromise - First Then: ${result}`);
  });
  firstPromise.then((result) => {
    console.log(`firstPromise - Second Then: ${result}`);
  });
  firstPromise.catch((error) => {
    console.log(`firstPromise - Catch : ${error}`);
  });
  */

  firstPromise
    .then((result) => {
      console.log(`firstPromise - First Then: ${result}`);
      return "Sent by the first then...";
      // throw new Error("error");
    })
    .then((result) => {
      console.log(`firstPromise - Second Then: ${result}`);
      return "Sent by the second then...";
    })
    .then((result) => {
      console.log(`firstPromise - Third Then: ${result}`);
    })
    .catch((err) => {
      console.error(`Outch ! ${err}`);
    })
    .finally(() => {
      console.info(`!!! ALWAYS FINALLY !!!`);
    });

  firstPromise.catch((error) => {
    console.log(`firstPromise - Catch : ${error}`);
  });
}
//#endregion

//#region Chaîner les promesses
if (runL104) {
  const prom01 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        firstName: "John",
        lastName: "Doe",
      });
    }, 5000);
  });
  const prom02 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        role: "Administrator",
      });
      // reject(2);
    }, 2000);
  });
  const prom03 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        billingAddress: "4th, No where Avenue, Chicago, USA",
        deliveryAddress: "12th, Some where Avenue, Chicago, USA",
      });
    }, 3000);
  });

  /*
  Promise.all([prom01, prom02, prom03])
    .then((result) => {
      const [identity, role, addresses] = [...result];
      console.log(
        `The ${role.role} [${identity.firstName}, ${identity.lastName}] is waiting for his order to be delivred at "${addresses.deliveryAddress}"`
      );
    })
    .catch((error) => {
      console.error(`Is not good ! ${error}`);
    });
  */
  /*
  Promise.allSettled([prom01, prom02, prom03])
    .then((result) => {
      if (!Object.values(result).every((item) => item.status === "fulfilled")) {
        throw new Error("Hum, hum, hum ... something is wrong ...");
      }
      const [identity, role, addresses] = [...result.map((r) => r.value)];
      console.log(
        `The ${role.role} [${identity.firstName}, ${identity.lastName}] is waiting for his order to be delivred at "${addresses.deliveryAddress}"`
      );
    })
    .catch((error) => {
      console.error(`Is not good ! ${error}`);
    });
  */
  Promise.race([prom01, prom02, prom03])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(`Is not good ! ${error}`);
    });

  // Async executed after all synchrone
  Promise.resolve("Ho! ho! ho!").then((result) => console.log(result));
  Promise.reject("Outch! Outch! Outch!").then((error) => console.error(error));
  console.log("It's Santa Claus!");

  // With resolver
  // const promWithResolver = Promise.withResolvers();
  // console.log(promWithResolver);
  const { promise, reject, resolve } = Promise.withResolvers();
  setTimeout(() => {
    resolve("Hello");
  }, 8000);
  promise.then((result) => console.log(result));
}
//#endregion
