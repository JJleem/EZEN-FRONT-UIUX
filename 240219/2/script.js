const bodyTag = document.querySelector("#theBody");

const colors = ["yellow", "aqua", "purple", "crimson"];

const btn = document.querySelector("button");

let i = 0;
const changeColor = () => {
  i++;
  if (i >= colors.length) {
    i = 0;
  }
  bodyTag.style.backgroundColor = colors[i];
};

btn.addEventListener("click", changeColor);
