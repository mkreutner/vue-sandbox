import "./styles.css";

const baseUrl = "https://my-json-server.typicode.com/mkreutner/data-mock/";

const runL109 = false; // Première requête HTTP avec fetch
const runL110 = false; // Effectuer une requête POST
const runL111 = false; // Les CORS
const runL112 = false; // Options avancées des requêtes fetch
const runL113 = false; // Annuler des requêtes en cours
const runL114 = false; // Les objets FormData
const runL115 = true; // La Web API URL

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

//#region Annuler des requêtes en cours
if (runL113) {
  // Create AbortController
  const controleur = new AbortController();

  setTimeout(() => controleur.abort(), 11);

  try {
    const fetchUsers = fetch(`${baseUrl}users`, {
      signal: controleur.signal,
      cache: "no-cache",
    });
    fetchUsers.then(async (res) => {
      try {
        const users = await res.json();
        console.log(users);
      } catch (e) {
        if (e.name === "AbortError") {
          console.error("Resquest has been canceled!");
        }
      }
    });
  } catch (err) {
    if (err.name === "AbortError") {
      console.error("Resquest has been canceled!");
    }
  }
}
//#endregion

//#region Les objets FormData
if (runL114) {
  const form = document.querySelector("#formCreateUser");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const firstname = formData.get("firstname").toLocaleLowerCase();
    const lastname = formData.get("lastname").toLocaleLowerCase();
    formData.append("username", firstname[0] + lastname);

    const newUser = {
      first_name: "John",
      last_name: "Doe",
      username: "jdoe",
    };
    const options = {
      method: "POST",
      boby: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const createUser = fetch(`${baseUrl}users`, options);
    createUser.then(async (response) => {
      try {
        const users = await response.json();
        console.log(users);
      } catch (e) {
        console.error(e);
      }
    });
  });
}
//#endregion

//#region La Web API URL
if (runL115) {
}
//#endregion
