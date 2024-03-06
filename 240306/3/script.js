// // iterable object = 이터러블 객체
// // iterable = 순차적인, 순서대로 무언가를 처리할 수 있는
// // "순서"대로 무언가의 연산작업을 처리할 수 있는 객체
// // "순서" = > index 값처럼 순번 할당 값
// // 일반객체 => 이터러블 객체
// // 문자열, 배열, Map, Set in 자바스크립트

// // 태생이 이터러블 객체가 아닌 요소들은 반복문을 사용할수 있는 기회가 없나?
// // 태생이 이터러블 객체가 아니더라도 이 요소들을 이터러블한 속성으로 변경시켜서 반복문을 사용할 수 있도록 하기 위한 목적!!
// // 이터러블 객체 어떤 속성 & 특징
// // iterable object 특징
// // 1) for...of 문 사용
// // 2) ... 전개연산자 구문 사용!
// // 3) 구조 분해 할당 !!!

// const hi = "hello";

// for (let ch of hi) {
//   console.log(ch);
// }
// const chArray = [...hi];
// console.log(chArray);

// const [ch1, ch2] = hi;
// console.log(ch1, ch2);

const arr = [1, 2, 3, 4, 5];
console.log(arr);
// 이터러블 하지 않은 객체 및 기타 요소들을 어떻게하면 이터러블하게 만들 수 있을까? 해결책을 찾기위해서 이터러블 객체의 특징을 확인해보자!
const arr01 = new Array();

// 배열, 이터러블한 객체가 되기 위해서!! 클래스 생성자 함수에는심볼이 존재하는데, "Symbol.iterator" => 심볼함수가 존재하기 때문에 배열은 이터러블한 객체가 될 수 있음!!
// 이터러블한 객체가 되기 위해서는 해당객체에 반드시 이터레이터 객체의 함수를 갖고있어야한다!
// Symbol.iterator => next()

// //유사 배열 => for /
// // 이터러블 하지않은 객체 = 이터러블한 객체 변환 !!
// // "제너레이터" 라는 함수를 사용해야함
// // 객체를 생성하는 것 자체 => 생성자함수 혹은 class를 활용해서 프로토타입 => 인스턴스화 하는 구조!!!

// const fnc = () => {
//   console.log("1");
//   console.log("2");
//   console.log("3");
// };
// fnc();
// //제너레이터 함수!!
// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// //g1 => 제너레이터 객체
// let g1 = gen();

// const g2 = gen();
// for (let i of g2) {
//   console.log(isSecureContext);
// }

const button = document.querySelector("button");
const result = document.querySelector("result");
function* train() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광교";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이철";
  yield "부발";
  yield "세종대왕릉";
  yield "여주";
}

const gyeonggang = train();
const trainChange = () => {
  let current = gyeanggang.next();
  if (currnet.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점!";
    button.setAttribute("disabled", "disabled");
  }
};
button.addEventListener("click", trainChange);
