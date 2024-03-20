const imageAll = document.querySelectorAll(".imageWrap .parallxImg");
const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  console.log(scrollNum);
  if (scrollNum < 2013) {
    imageAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3d(0,0,${
        scrollNum / (2 * (totalNum - index))
      }px)`;
    });
  }
});
