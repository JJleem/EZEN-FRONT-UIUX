new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
});

const navBtn = document.querySelector("#nav_icon");
// console.log(navBtn);
const nav = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
  // console.log("click");
  navBtn.classList.toggle("active");
});
