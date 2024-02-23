const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");
console.log(btn);
console.log(nav);

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});
