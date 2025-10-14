import "/assets/styles/styles.scss";
import "./index.scss";

// API Dyma
const baseURL = `https://restapi.fr/api/`;
const collectionName = `mkr-articles`;

const divArticlesContainer = document.querySelector(".articles-container");

// Create one article container
const createArticle = (article) => {
  const divArticle = document.createElement("div");
  divArticle.classList.add("article");

  const image = document.createElement("img");
  image.src = article.picture_url;
  image.alt = "Author picture";

  const title = document.createElement("h2");
  title.classList.add("article-title");
  title.innerHTML = article.title;

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("article-author");
  divAuthor.innerHTML = article.author;

  const divCategory = document.createElement("div");
  divCategory.classList.add("article-category");
  divCategory.innerHTML = article.category;

  const divContent = document.createElement("div");
  divContent.classList.add("article-content");
  divContent.innerHTML = article.content;

  const divActions = document.createElement("div");
  divActions.classList.add("article-actions");

  const btnReset = document.createElement("button");
  btnReset.classList.add("btn");
  btnReset.classList.add("btn-danger");
  btnReset.innerHTML = "Delete";
  btnReset.setAttribute("data-id", article._id);
  btnReset.setAttribute("type", "reset");

  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add("btn");
  btnSubmit.classList.add("btn-primary");
  btnSubmit.innerHTML = "Edit";
  btnSubmit.setAttribute("disabled", "");
  btnSubmit.setAttribute("data-id", article._id);
  btnSubmit.setAttribute("type", "submit");

  divActions.append(btnReset, btnSubmit);

  divArticle.append(
    image,
    title,
    divAuthor,
    divCategory,
    divContent,
    divActions
  );

  return divArticle;
};

// Create articles list
const createArticles = (articles) => {
  const articlesList = articles.map((article) => createArticle(article));
  return articlesList;
};

// Retrive list of articles
const fetchArticles = async () => {
  try {
    const repsonse = await fetch(`${baseURL}${collectionName}`);
    const articles = await repsonse.json();

    divArticlesContainer.innerHTML = "";
    divArticlesContainer.append(...createArticles(articles));
  } catch (err) {
    console.error(`An error occurs: ${err}`);
  }
};

fetchArticles();
