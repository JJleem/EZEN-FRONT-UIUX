const contentAll = document.querySelectorAll(".contentWrap img");
// const shodow = contentAll[0];
// const date = contentAll[1];
// const human = contentAll[2];
const [shodow, date, human, textImg] = contentAll;

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});
const loop = () => {
  targetX += (x - targetX) * speed;
  shodow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  human.style.transform = `translateX(${-targetX / 20}px)`;

  window.requestAnimationFrame(loop);
};
loop();
