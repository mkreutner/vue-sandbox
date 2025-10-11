import "./styles.css";

const lstTodos = document.querySelector("#lstTodos");
const formAddTodo = document.querySelector("#formAddTodo");
const inNewTodo = document.querySelector("#formAddTodo > #inNewTodo");
const btnClearTodoList = document.querySelector("#btnClearTodoList");
/**
 * Liste of ToDo(s)
 */
const todosList = [
  {
    text: "First todo",
    done: false,
  },
  {
    text: "Doing JavaScript",
    done: true,
  },
  {
    text: "Calling Superman",
    done: false,
  },
];

/**
 * Check if string is empty or blank
 * @param {*} str
 * @returns true if blank or empty, false otherwise
 */
const isEmpty = (str) => !str?.length;
const isBlank = (str) => !str || /^\s*$/.test(str);
const isBlankOrEmpty = (str) => isEmpty(str) && isBlank(str);

/**
 * Display the ToDos List
 */
const displayTodo = () => {
  const todosNode = todosList.map((todo, idx) => {
    return createToDoElement(todo, idx);
  });
  lstTodos.innerHTML = "";
  lstTodos.append(...todosNode);
};

/**
 *
 * @param {*} todo
 * @param {*} idx
 * @returns HTML LiElement
 */
const createToDoElement = (todo, idx) => {
  const padIdx = idx.toString().padStart(3, "0");

  const span = document.createElement("span");
  span.classList.add("todo");
  todo.done && span.classList.add("done");
  const p = document.createElement("p");
  p.innerHTML = todo.text;
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  btnDelete.id = `btnDelete-${padIdx}`;
  btnDelete.dataset.totoNumber = idx;
  btnDelete.addEventListener("click", (event) => {
    removeTodoFromList(idx);
  });
  const li = document.createElement("li");
  li.id = `todo-${padIdx}`;
  li.append(span, p, btnEdit, btnDelete);

  return li;
};

/**
 * Add new toto in the List
 * @param {*} todoText
 */
const addNewTodoInList = (todoText) => {
  todosList.push({
    text: todoText,
    done: false,
  });
};

/**
 * Remove todo at index idx from the todo List
 * @param {*} idx
 */
const removeTodoFromList = (idx) => {
  todosList.splice(idx, 1);
  displayTodo();
};

/**
 * Callback when user wants to add new a new toDo
 * @param {*} event
 */
const sumbitFormTodoCallback = (event) => {
  // Stop propagation
  event.preventDefault();
  console.log(event.submitter.id);
  // Retreive todo text value
  const value = inNewTodo.value;
  // Clear current input
  inNewTodo.value = "";
  if (!isBlankOrEmpty(value)) {
    // Add new toto in ToDo list
    addNewTodoInList(value);
  }
  // Refresh the ToDo list
  displayTodo();
};

/** Main App */
displayTodo();
formAddTodo.addEventListener("submit", sumbitFormTodoCallback);
