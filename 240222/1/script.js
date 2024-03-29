// window.onload = alert("안녕하세요!");

//onclick
// const button = document.querySelector("button");

// const btnfnc = () => {
//   window.document.body.style.backgroundColor = "green";
// };

// button.onclick = btnfnc;

// const result = document.querySelector("#result");

// document.body.onkeydown = (event) => {
//   result.innerText = `code : ${event.code},
//   key: ${event.key}
//   `;
// };

// const button = document.querySelector("button");

// // button.onclick = () => {
// //   document.body.style.backgroundColor = "crimson";
// // };

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
// form.addEventListener("submit", () => {

// });

button.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("input[type='text']").value;
  const result = document.querySelector(".result");
  const count = word.length;
  result.innerText = count;
  if (count >= 10) {
  } else {
    alert("아이디는 10자이상이어야합니다.");
  }
});
