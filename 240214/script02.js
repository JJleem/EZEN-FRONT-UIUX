// const x = 10;
// const y = 4;

// console.log(++y);
// %, ++, --

// let a = 10;
// a = a++;
// // a = --a;
// console.log(a);

// let name = "홍길동";
// console.log(name + "님 안녕하세요!");
// console.log(`${name}님 안녕하세요!`);

// y += x;

// y = y - x;
// y -= x;

//할당연산자
// let str = "<table border='1'>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</td>";
// str += "</table>";

// document.write(str);

//얕은 비교(형태안에들어간 아이템의 속성만봄)
// console.log(3 == 3);
// console.log(3 != 3);
// console.log(3 != "3");
// //깊은비교
// console.log(3 !== "3");
// ! => not
// 논리연산자!!
// A && B (둘다 참이여야하는경우) => and
// A || B => or

//1. 사용자가 입력한 소비자가를 찾아온다
//2. 사용자가 입력한 할인률값을 찾아온다
//3. 사용자가 "할인가격 계산하기" 버튼을 클릭한다면 , 이벤트가 작동하게 해준다.
//4. 이벤트를 정의한다,
//5. "할인된 가격 출력"공간에 계산된 값을 출력시켜준다.

const originPrice = document.querySelector("#price");
const rate = document.querySelector("#rate");
const btn = document.querySelector("#button");
const showResult = document.querySelector("#showResult");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const originPrice = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  const savedPrice = originPrice * (rate / 100);
  const resultPrice = originPrice - savedPrice;

  showResult.innerHTML = `상품의 원래 가격은 ${originPrice} 이고, 할인률은 ${rate}% 입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다!`;
});
