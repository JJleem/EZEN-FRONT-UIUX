const imageAll = document.querySelectorAll(".imageWrap .parallxImg");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallxImg");
console.log(imageAll, subPageImage);
let scrollNum = 0;
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${
        -scrollNum / (0.9 * (totalNum - index))
      }px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
  console.log(x, y);

  // imageAll[5].style.transform = `translateX(${-x / 10}px)`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.2) translate(${-targetX / 50}px, ${
    -scrollNum / (5 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.3) translate(${targetX / 20}px, ${
    -scrollNum / (5 * (totalNum - 5))
  }px)`;
  window.requestAnimationFrame(loop);
};
loop();
