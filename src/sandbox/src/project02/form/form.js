import "/assets/styles/styles.scss";
import "./form.scss";

import { confirmModal } from "/assets/js/modal.js";

// API Dyma
const baseURL = `https://restapi.fr/api/`;
const collectionName = `mkr-articles`;

// Retreive form
const formNewArticle = document.querySelector("#formNewArticle");
const listErrors = document.querySelector("#listErrors");
let errorsList = [];
let articleId;

// Functions
const fillForm = (article) => {
  for (let element of formNewArticle.querySelectorAll(["input", "textarea"])) {
    element.value = article[element.name];
  }
};

const initForm = async () => {
  articleId = new URLSearchParams(location.search).get("id");
  if (articleId) {
    try {
      const response = await fetch(`${baseURL}${collectionName}/${articleId}`);
      if (response.status < 300) {
        const article = await response.json();
        fillForm(article);
      }
    } catch (err) {
      console.error(`An error occurs: ${err}`);
    }
  }
};

initForm();

const isValidForm = (article) => {
  errorsList = [];
  for (let k in article) {
    if (!article[k]) {
      errorsList.push(`Field ${k} is required`);
    }
  }

  return !errorsList.length;
};

formNewArticle.addEventListener("reset", async (event) => {
  event.preventDefault();
  const answer = await confirmModal(
    "Are you sure you want to abandon editing this article?"
  );
  if (answer === true) {
    location.assign("/");
  }
});

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
      let url = `${baseURL}${collectionName}`;
      url += !articleId ? "" : `/${articleId}`;
      console.log(articleId, url);
      const response = await fetch(url, {
        method: !articleId ? "POST" : "PATCH",
        body: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status < 299) {
        location.assign("/");
      }
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
