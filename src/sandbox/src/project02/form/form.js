import "/assets/styles/styles.scss";
import "./form.scss";

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

formNewArticle.addEventListener("submit", (event) => {
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
    const jsonData = JSON.stringify(article);
    console.log(jsonData);
    listErrors.innerHTML = "";
    // Fetch form
  } else {
    listErrors.innerHTML = "";
    errorsList.forEach((err) => {
      const li = document.createElement("li");
      li.innerHTML = `${err}`;
      listErrors.append(li);
    });
  }
});
