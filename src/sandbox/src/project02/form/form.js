import "/assets/styles/styles.scss";
import "./form.scss";

// API Dyma
const baseURL = `https://restapi.fr/api/`;
const collectionName = `mkr-articles`;

// Retreive form
const formNewArticle = document.querySelector("#formNewArticle");
const listErrors = document.querySelector("#listErrors");
let errorsList = [];

// Functions
const isValidForm = (article) => {
  errorsList = [];
  for (let k in article) {
    if (!article[k]) {
      errorsList.push(`Field ${k} is required`);
    }
  }

  return !errorsList.length;
};

formNewArticle.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formNewArticle);

  /** Non optimal way */
  //   const objData = Array.from(formData.entries()).reduce((acc, value) => {
  //     acc[value[0]] = value[1];
  //     return acc;
  //   }, {});

  /** Optimal way */
  // const objData = Object.fromEntries(formData.entries());

  const article = Object.fromEntries(formData.entries());
  if (isValidForm(article)) {
    try {
      const jsonData = JSON.stringify(article);
      listErrors.innerHTML = "";
      // Fetch form
      const response = await fetch(`${baseURL}${collectionName}`, {
        method: "POST",
        body: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const body = await response.json();
    } catch (err) {
      console.error(`An error occurs: ${err}`);
    }
  } else {
    listErrors.innerHTML = "";
    errorsList.forEach((err) => {
      const li = document.createElement("li");
      li.innerHTML = `${err}`;
      listErrors.append(li);
    });
  }
});
