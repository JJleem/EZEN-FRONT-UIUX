// React => Js 준수한 프로그래밍 코딩 단계
// => CRUD
// => Create Read Update Delete

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const todos = [];
const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id !== target.id);
  save();
  target.remove();
};
const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createlement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};
const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};
const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  }
  todos = userTodos;
};
init();
form.addEventListener("submit", handler);

// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // if (input.value) {
//   //   console.log("click");
//   //   const li = document.createElement("li");
//   //   li.innerText = input.value;
//   //   ul.appendChild(li);
//   //   input.value = "";
//   // }
// });
