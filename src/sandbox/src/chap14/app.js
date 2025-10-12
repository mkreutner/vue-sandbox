import "./styles.css";

const runL101 = false; // Introduction à l'asynchrone et timers
const runL102 = true; // Les promesses (Promises always promises :D)

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

//#region Promises
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
