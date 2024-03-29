// prompt();
// alrert();
// document.write();

//함수의 생김새!!
//단어(=키워드)()=> 함수!!

//함수가 작동하려면 무엇이 필요할까?
// 1) 함수 구현 = 제작
// 2) 함수 호출 = 실행

// 함수를 구현하려면 어떻게 해야할까?
// 함수를 구현하는 방법은 3가지!!
// 1) 클래스 함수를 구현하는 방법
// 2) 익명 함수를 구현하는 방법
// 3) 화살표 함수를 구현하는 방법

// 1~5까지더해보세요
//(초급레벨)
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

//(중급레벨)
//만약 숫자를 1~5까지가 아니라 1~100까지라면 아래의 코드는 사용이불가능함
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

//(고급레벨)

//재활용이 가능한 코드 업그레이드
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }
//클래스함수
// // // calcSum(100);
// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요"));
// // function sum(a, b) {
// //   const result = a + b;
// //   alert(`두 수의 합은 ${result}입니다`);
// // }

// // sum(userNum01, userNum02);

// //익명함수
// // const sum = function (a, b) {
// //   const result = a + b;
// //   alert(`두 수의 합은 ${result}입니다`);
// // };
// // sum(userNum01, userNum02);

// //화살표 함수
// // const sum = (a, b) => {
// //   const result = a + b;
// //   alert(`두 수의 합은 ${result}입니다`);
// // };
// sum(userNum01, userNum02);

// return 문
// const num = Number(prompt("숫자를 몇까지 더할까요?"));

// function calSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// calSum(num);
// document.write(`1부터 ${num}까지 더하면 ${calSum(num)}입니다.`);
// const userNum01 = Number(prompt("첫번째 숫자"));
// const userNum02 = Number(prompt("두번째 숫자"));
// const userNum03 = Number(prompt("세번째 숫자"));
// function multiple(a, b, c = 10) {
//   return a + b + c;
// }
// // console.log(multiple(userNum01, userNum02, userNum03));
// console.log(multiple(1, 9));

// function clacSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

// clacSum(5);

//JS 코드를 작성하다보면 큰 이슈!!
//JS 엄청 큰 문제점을 발견하면 => 콘솔창을 통해서 알려줌!
//아주 사소한 문법상의 문제점은 알려주지않음!!
//오타 등등
//코드상의 문제가 발생 => 버그 발생!
// TS => 실무
// 실무 JS (x) => TS (o)
// 보다 효율적으로 버그를 찾는 방법!!

// const hi = "hello";

// function greeting() {
//   console.log(hi);
// }
// greeting();

// let hi = "hello";

// function change() {
//   hi = "bye";
// }
// console.log(hi);
// change();
// console.log(hi);

// const factor = 5;
// function calc() {
//   return num * factor;
// }

// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);

//JS 권장사항!!
// 1) var 보다는 let, const 키워드로 변수를 선언해라!

// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// var num = 3;
// console.log(`1부터 ${num} 까지 더하면 ${addSum(num)}`);

// 2) 가급적이면, 전역 스코프의 변수선언은 피해라!!
// 3) var, let 보다는 const 에 적응해라!
// 즉시 실행 함수 !!

// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// }

// (function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(3, 2);

//Hoisting 기법
//무언가를 끌어올리다
// class 함수는 hoistiong / 화살표 & 익명 x

// example();

// const example = () => {
//   console.log("hello");
// };

// const example01 = function () {
//   console.log("hello");
// };
// // 화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호 & 값을 반환시켜주는 return문을 생략해도 문제없이 작동가능!
// let hi = () => `안녕하세요!`;
// hi();

// console.log(hi());

// // let sum = function (a, b) {
// //   return a + b;
// // };

// let sum = (a, b) => a + b;

//화살표 함수 탄생한 이유 :
//1) 반복적으로 사용되는 function & 함수명을 생략!!
//2) JS만의 근본없는 구현 & 호출부의 순서를 명확하게 정의하기위한목적!!
//3) 함숨의 실행문에서 중괄호&return문을 사용하지않아도 구현할수 있도록하기위한 목적!

// 변수 선언시, let, const, var 사용하지 않으면 무조건 전역변수화!!
// function greeting() {
//   hi = "hello";
// }
// // const hi = "hello";
// // function greeting() {}
// greeting();
// console.log(hi);

//콜백 함수
//함수 안에 또다른 함수를 호출할 때 부르는 용어

// const btn = document.querySelector("button");
// // const display = () => {
// //   alert("오늘도 화이팅입니다~");
// // };
// btn.addEventListener("click", () => alert("오늘도 화이팅입니다~"));

// const showData = () => {
//   alert(`안녕하세요~ JAEJUN님 나이가 20살 이군요!`);
// };

// showData();

// const showData = (name, age) => {
//   alert(`안녕하세요~ ${name}님 나이가 ${age}살 이군요!`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력해주세요");
//   const userAge = prompt("나이를 입력해주세요");
//   callback(userName, userAge);
// };
// getData(showData);

//JS 함수 => 1급 시민 이라고 부른다 (first class sityzone)
//모든 프로그래밍 언어에서 1급시민이 되려면 다음과같은 조건 부합!

//1) 함수를 변수의 값으로 할당할수있어야한다.
//2) 함수가 또다른 함수의 매개변수 혹은 인수인자 값으로 사용될수있어야한다!.
//3) 함수가 또다른 함수의 return 안에 반환값으로 들어올쉬있어야한다.
// const init  = () =>
// return function(a,b) {
//   return a-b > 0? a-b:b=a;
// }

// console.log(`inint (30,20)`);

// const addNum = (a, b) => a + b;

// console.log(addNum(1, 5, 5, 2, 3, 1));

// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 3, 5, 7));
// console.log(addNum(1, 3));

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번째로 좋아하는 과일은 ${second}`;
//   const str02 = `두번째로 좋아하는 과일은 ${favor}`;
//   return str02;
// };
// console.log(displayFavorites("사과", "포도", "토마토"));

//window 운영체제 => 내장함수!! 사용!!
// JS =>싱글스레드로 작동하는 객체지향 프로그래밍 언어
// 싱글 => 1 / 스레드 => 길 => 1차선 통행!
// 1차선 => 사고

//동시성이 불가능함 / 비동기 처리 x
// <-> 멀티스레드 : 복수차선
// loading spinner

// setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수!
// const greeting = () => {
//   console.log("안녕하세요!");
// };
// /// 1000밀리초 = 1초
// setInterval(greeting, 2000);

// clearInterval(): 특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수
// 단락회로평가!!

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

//setTimeout() : 특정 시간이 경과한 이후에 작동하게 만드는 함수
// heap / callstack / Que

// setTimeout(() => {
//   console.log("안녕하세요!");
// }, 3000);
