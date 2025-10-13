import "./styles.css";

const baseUrl = "https://my-json-server.typicode.com/mkreutner/data-mock/";

const runL109 = false; // Première requête HTTP avec fetch
const runL110 = false; // Effectuer une requête POST
const runL111 = false; // Les CORS
const runL112 = true; // Options avancées des requêtes fetch
//#region Première requête HTTP avec fetch
if (runL109) {
  const fetchAllUsers = fetch(`${baseUrl}users`);
  fetchAllUsers.then(async (response) => {
    try {
      const users = await response.json();
      console.log(users);
      // An other way to get all users
      // const users = await response.text();
      // console.log(JSON.parse(users));
    } catch (e) {
      console.error(e);
    }
  });
}
//#endregion

//#region Effectuer une requête POST
if (runL110) {
  const newUser = {
    first_name: "John",
    last_name: "Doe",
    username: "jdoe",
  };
  const options = {
    method: "POST",
    boby: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const createUser = fetch(`${baseUrl}users`, options);
  createUser.then(async (response) => {
    try {
      const users = await response.json();
      console.log(users);
      // An other way to get all users
      // const users = await response.text();
      // console.log(JSON.parse(users));
    } catch (e) {
      console.error(e);
    }
  });
}
//#endregion

//#region Les CORS
if (runL111) {
  // Just a lot of knowledge
}
//#endregion

//#region Options avancées des requêtes fetch
if (runL112) {
  const digestMessage = async (algo, jsonData) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(JSON.stringify(jsonData));
    const hash = await window.crypto.subtle.digest(algo, data);
    return hash;
  };

  const newUser = {
    first_name: "John",
    last_name: "Doe",
    username: "jdoe",
  };

  digestMessage("SHA-1", newUser)
    .then((r) => {
      console.log(
        [...new Uint8Array(r)]
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("")
      );
    })
    .catch((e) => {
      console.error(e);
    });
  digestMessage("SHA-256", newUser)
    .then((r) => {
      console.log(
        [...new Uint8Array(r)]
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("")
      );
    })
    .catch((e) => {
      console.error(e);
    });
  digestMessage("SHA-512", newUser)
    .then((r) => {
      console.log(
        [...new Uint8Array(r)]
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("")
      );
    })
    .catch((e) => {
      console.error(e);
    });
}
//#endregion
