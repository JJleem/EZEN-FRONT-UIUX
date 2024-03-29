//click 클릭했을때 없어지고 모달나오기
//close 눌렀을때 다시 click 버튼 나오기

const click = document.querySelector(".open");
const modal = document.querySelector(".container");
const close = document.querySelector(".close");
// 내가한거
// click.onclick = function () {
//   modal.classList.toggle("clicked");
//   click.classList.toggle("vanish");
// };

// close.onclick = function () {
//   modal.classList.toggle("vanish");
//   click.classList.toggle("vanish");
// };

const openFnc = () => {
  console.log("open");
  click.style.display = "none";
  modal.style.display = "flex";
};
const closeFnc = () => {
  console.log("close");
  click.style.display = "block";
  modal.style.display = "none";
};
click.onclick = openFnc;
close.onclick = closeFnc;
