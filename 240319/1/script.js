// 마우스의 움직임에 따라서 좌표값이 변경되고 있다는 사실을 확인해야 한다!!

// window 객체 안에 포함되어있는 이벤트

// clientX : 74
// => 스크롤을 인식하지않음. 단순히 웹브라우저상의 마우스 위치값을 계속 반환
// pageX : 74
// => 웹페이지를 스크롤하게 되면 값이 바뀜!!
// if, 스크롤이 발생될 수 밖에 없는 페이지안에서 스크롤이 내려가는 상황에서도 나의 X 혹은 Y좌표값을 찾아오고 싶다면, 반드시 pageX 값 사용해야함
// screenX : -823
//=> 모니터화면을 기준으로 좌표값

const cursorItem = document.querySelector(".cursorItem");
const buttunAll = document.querySelectorAll("a");
const circle = document.querySelector(".circle");
console.log(cursorItem);
let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

const speed = 0.03;

buttunAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  button.addEventListener("mouseleave", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  // console.log(e);
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  window.requestAnimationFrame(loop);
};
loop();
