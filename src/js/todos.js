import { HIDDEN_CLASSNAME } from "./module.js";
const TODO_KEY = "todos";

const todoForm = document.querySelector("#todo-question");
const todoInput = todoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

export const showTodoForm = () => todoForm.classList.remove(HIDDEN_CLASSNAME);

let todo_arr = [];
const saveTodos = () => {
  localStorage.setItem(TODO_KEY, JSON.stringify(todo_arr));
};

const deleteToDo = (e) => {
  const targetLi = e.target.parentElement;
  const parentUlLength = targetLi.parentElement.childNodes.length;
  targetLi.remove();
  todo_arr = todo_arr.filter((el) => el.id !== parseInt(targetLi.id));
  saveTodos();
  if (parentUlLength === 1) {
    toDoList.classList.add(HIDDEN_CLASSNAME);
  }
};

const paintTodo = (newTodoObj) => {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✖";
  deleteBtn.addEventListener("click", deleteToDo);

  li.appendChild(deleteBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
};

const onSubmitHandler = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: todoValue,
    id: Date.now(),
  };
  todo_arr.push(newTodoObj);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  paintTodo(newTodoObj);
  saveTodos();
};

todoForm.addEventListener("submit", onSubmitHandler);

const savedToDos = JSON.parse(localStorage.getItem(TODO_KEY));

if (savedToDos && savedToDos.length !== 0) {
  console.log(savedToDos);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  todo_arr = savedToDos;
  savedToDos.forEach(paintTodo);
} else {
  toDoList.classList.add(HIDDEN_CLASSNAME);
}
