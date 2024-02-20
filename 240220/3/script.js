const btn = document.querySelector("button");
const body = document.querySelector("body");

console.log(btn);
console.log(body);

// btn.onclick = () => {
//   body.style.backgroundColor = "black";
//   con.style.color = "#fff";
//   innerText = "라이트모드로바꾸기";
//   style.color = "fff";
// };

// btn.onclick = () => {
//   btn.classList.toggle("clicked");
//   body.classList.toggle("clicked");
//   if (!body.classList.contains("clicked")) {
//     btn.innerText = "다크모드로 바꾸기";
//   } else {
//     btn.innerText = "라이트모드로 바꾸기";
//   }
// };

btn.onclick = () => {
  if (!body.classList.contains("clicked")) {
    body.classList.add("clicked");
    btn.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("clicked");
    btn.innerText = "다크모드로 바꾸기";
  }
};
