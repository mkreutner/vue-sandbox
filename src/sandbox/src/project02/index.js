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
  image.src =
    article.picture_url ?? "https://randomuser.me/api/portraits/lego/6.jpg";
  image.alt = "Author picture";

  const title = document.createElement("h2");
  title.classList.add("article-title");
  title.innerHTML = article.title ?? "Without Title";

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("article-author");
  divAuthor.innerHTML = article.author ?? "Inconnu";

  const divCategory = document.createElement("div");
  divCategory.classList.add("article-category");
  divCategory.innerHTML = article.category;

  const divContent = document.createElement("div");
  divContent.classList.add("article-content");
  divContent.innerHTML = article.content;

  const divActions = document.createElement("div");
  divActions.classList.add("article-actions");

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn");
  btnDelete.classList.add("btn-danger");
  btnDelete.innerHTML = "Delete";
  btnDelete.setAttribute("data-id", article._id);
  btnDelete.addEventListener("click", (event) => {
    deleteArticle(article._id);
  });

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn");
  btnEdit.classList.add("btn-primary");
  btnEdit.innerHTML = "Edit";
  btnEdit.setAttribute("disabled", "");
  btnEdit.setAttribute("data-id", article._id);

  divActions.append(btnDelete, btnEdit);

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

const deleteArticle = async (id) => {
  try {
    const response = await fetch(`${baseURL}${collectionName}/${id}`, {
      method: "DELETE",
    });
    const body = await response.json();
    console.log(body);
    fetchArticles();
  } catch (err) {
    console.error(`An error occurs: ${err}`);
  }
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
