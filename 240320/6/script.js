const img = document.querySelector("section");
const imgimg = document.querySelector("section img");
const wrap = document.querySelector(".wrap");
const h1 = document.querySelector(".h1 h1");
const divh1 = document.querySelector(".h1");
const footer = document.querySelectorAll(".footer p");

function removeActiveClasses() {
  footer.forEach((p) => {
    p.classList.remove("active");
  });
}
// function removeAnimateClasses() {
//   divh1.forEach((p) => {
//     p.classList.remove("animated");
//   });
// }

footer.forEach((p, index) => {
  p.addEventListener("click", () => {
    if (index === 1) {
      removeActiveClasses();
      p.classList.toggle("active");
      h1.innerText = "Portfolio Slide#02";
      divh1.classList.toggle("animated");
      wrap.style.background = " linear-gradient(150deg, crimson, black)";
      imgimg.src = `./images/photo-02.jpg`;
    } 
    else if (index === 2) {
      removeActiveClasses();
      p.classList.toggle("active");
      h1.innerText = "Portfolio Slide#03";
      wrap.style.background = " linear-gradient(150deg, blue, black)";
      divh1.classList.toggle("animated");
      imgimg.src = `./images/photo-03.jpg`;
    } 
    else if (index === 0) {
      removeActiveClasses();
      p.classList.toggle("active");
      h1.innerText = "Portfolio Slide#01";
      divh1.classList.toggle("animated");
      wrap.style.background = " linear-gradient(150deg, yellow, black)";
      imgimg.src = `./images/photo-01.jpg`;
    }
  });
});
