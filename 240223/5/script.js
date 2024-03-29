// 앞에 삽입//
// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");
// tsNode.appendChild(tsTextNode);

// const basisNode = document.querySelectorAll("p")[0];
// console.log(basisNode);
// document.body.insertBefore(tsNode, basisNode);

//빼기
// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode;
// console.log(parentH1);
// // heading.addEventListener("click", () => {
// //   heading.remove();
// // // });
// const items = document.querySelectorAll("li");
// for (let item of items) {
//   item.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }

// this 객체
// 단, 조건!!! => 현재 선택한 li태그를 this 객체로 대체해서 사용할 수 있음, 단 클래스함수를 사용할때에만 가능!! => 화살표함수를사용할 때에는 this 객체가 이벤트를 실행시키는 당사자 = 주체가 되는것이 아니라 window 객체가 this가 됩니다!
// const ps = document.querySelectorAll("p");
// const spans = document.querySelectorAll("span");
// console.log(ps);
// console.log(spans);
// for (let p of ps) {
//   const ss = ps[0];
//   spans.addEventListener("click", () => {
//     p.parentNode.removeChild(p);
//   });
// }

const buttons = document.querySelectorAll("p span");
console.log(buttons);
for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
