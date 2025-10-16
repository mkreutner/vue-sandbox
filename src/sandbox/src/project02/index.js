import "/assets/styles/styles.scss";
import "./index.scss";

// API Dyma
const baseURL = `https://restapi.fr/api/`;
const collectionName = `mkr-articles`;

const divArticlesContainer = document.querySelector(".articles-container");
const divCategories = document.querySelector(".categories");
const divSelectedCategory = document.querySelector(".selected-category");

let articles;
let categories;

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
  divAuthor.innerHTML +=
    " - " +
    new Date(article.createdAt).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

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
  btnEdit.setAttribute("data-id", article._id);
  btnEdit.addEventListener("click", (event) => {
    editArticle(article._id);
  });

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
    fetchArticles();
  } catch (err) {
    console.error(`An error occurs: ${err}`);
  }
};

const editArticle = (id) => {
  try {
    location.assign(`/form/form.html?id=${id}`);
  } catch (err) {
    console.error(`An error occurs: ${err}`);
  }
};

// Create articles list
const createArticles = (articles) => {
  const articlesList = articles.map((article) => createArticle(article));
  return articlesList;
};

// filter Category
const filterByCategory = (category) => {
  // extract articles in category
  const filteredArticles = category
    ? articles.filter((article) => article.category === category)
    : articles;

  divArticlesContainer.innerHTML = "";
  divArticlesContainer.append(...createArticles(filteredArticles));

  divSelectedCategory.innerHTML = `
    <i class="fa-solid fa-xmark"></i> ${
      category
        ? category + "(" + filteredArticles.length + "/" + articles.length + ")"
        : "All (" + articles.length + ")"
    }
  `;
  divSelectedCategory.addEventListener("click", (event) => {
    filterByCategory();
  });
};

// Create a category
const createCategoryElement = (category) => {
  const li = document.createElement("li");
  li.innerHTML = `${category.category} <strong>(${category.count})</strong>`;
  li.addEventListener("click", (event) => {
    filterByCategory(category.category);
  });
  return li;
};

const createCategoriesElements = (categories) => {
  const articlesList = categories.map((category) =>
    createCategoryElement(category)
  );
  return articlesList;
};

// Retreive all categories from articles list and count occurences
const createCategories = (articles) => {
  const categoriesList = articles.reduce((acc, article) => {
    if (!acc.some((item) => item.category === article.category)) {
      acc.push({
        count: 1,
        category: article.category,
      });
    } else {
      acc.find((o) => o.category === article.category).count += 1;
    }
    return acc;
  }, []);
  return categoriesList;
};

// Retrive list of articles
const fetchArticles = async () => {
  try {
    const repsonse = await fetch(`${baseURL}${collectionName}`);
    articles = await repsonse.json();
    categories = createCategoriesElements(createCategories(articles));

    divArticlesContainer.innerHTML = "";
    divArticlesContainer.append(...createArticles(articles));
    divCategories.innerHTML = "";
    divCategories.append(...categories);
    divSelectedCategory.innerHTML = "All (" + articles.length + ")";
  } catch (err) {
    console.error(`An error occurs: ${err}`);
  }
};

fetchArticles();
