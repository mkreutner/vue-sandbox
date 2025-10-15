import "./styles.css";

const baseUrl = "https://my-json-server.typicode.com/mkreutner/data-mock/";

const runL131 = false; // Déclarer une date en Javascript
const runL132 = false; // Les formats des Dates en chaîne de caractères
const runL133 = false; // Manipuler des timestamps
const runL134 = false; // L'API des objets Date
const runL135 = true; // Affichage des dates

//#region Déclarer une date en Javascript
if (runL131) {
  const today = new Date();
  const origine = new Date(0);
  const oneYearLater = new Date(1000 * 3600 * 24 * 365);
  const customDate = new Date(2020, 0, 7, 10, 45, 35);

  console.log(today);
  console.log(origine);
  console.log(oneYearLater);
  console.log(customDate);
}
//#endregion

//#region Les formats des Dates en chaîne de caractères
if (runL132) {
  const today = new Date();

  console.log(today.toString());
  console.log(today.toISOString());
}
//#endregion

//#region Manipuler des timestamps
if (runL133) {
  const isoDate = "2025-10-15T11:42:00.000Z";

  const today = new Date(isoDate);
  const todayTimestamp = Date.now();

  const date = Date.parse(isoDate); // timestamp
  const dateFromTimestamp = new Date(isoDate);

  console.log(today);
  console.log(todayTimestamp);
  console.log("---------------------------");
  console.log(date);
  console.log(dateFromTimestamp);

  const startTimestamp = Date.now(); // Date.now() is more efficient beacause doens't use memory to store Date object
  setTimeout(() => {
    const stopTimestamp = Date.now();
    const deltaTimestamp = stopTimestamp - startTimestamp;
    console.log(deltaTimestamp);
  }, 1000);

  const startDate = new Date();
  setTimeout(() => {
    const stopDate = new Date();
    const deltaDate = stopDate.getTime() - startDate.getTime();
    console.log(deltaDate);
  }, 3141);
}
//#endregion

//#region L'API des objets Date
if (runL134) {
  const isoDate = "1975-12-05T08:42:00.000Z";
  const date = new Date(isoDate);
  console.log(date.getFullYear());
  console.log(date.getMonth()); // Month begin at 00
  console.log(date.getDay()); // Day of the week
  console.log(date.getDate(), date.getUTCDate()); // Day of the month

  const isoDate2 = "1975-12-31T08:42:00.000Z";
  const date2 = new Date(isoDate2);
  console.log(date2);
  date2.setDate(date2.getDate() + 1);
  console.log(date2);

  const isoDate3 = "1975-12-31T08:42:00.000Z";
  const date3 = new Date(isoDate3);
  console.log(date3.toJSON());
}
//#endregion

//#region Affichage des dates
if (runL135) {
  const isoDate = "1975-12-05T08:42:00.000Z";
  const date = new Date(isoDate);
  // console.log(date);
  // console.log(date.toDateString());
  // console.log(date.toTimeString());
  // console.log(date.toLocaleTimeString("fr-FR"));
  // console.log(date.toLocaleString("fr-FR"));
  console.log(
    date
      .toLocaleDateString("fr-FR", {
        day: "2-digit",
        weekday: "long",
        month: "long",
        year: "numeric",
      })
      .toLocaleUpperCase()
  );
}
//#endregion
