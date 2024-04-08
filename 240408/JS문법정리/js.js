// React.js 에서 자주 사용되는 JavaScript 주요 문법 정리!!

// 1. 객체 줄임 표기법

// const name = "jaejun";
// const age = 28;
// const person = {
//   name,
//   age,
// };

// 객체안에들어가는 key의 이름과 . value 값을 담고있는 변수명이 같다면 이렇게 줄임 표기 할수있따.

// 2. 구조 분해 할당
// const person = {
//   name: "Kevin",
//   age: 31,
// };

// // const name = person.name;
// // const age = person.age;

// const { name, age } = person;

// // 3. 전개연산자 구문
// const arr = [1, 2, 3, 4];
// const [a, b, ...rest] = arr;

//4. 깊은 복사 ( feat. 참조타입에대한 자료)
// const person = {
//   name: "Rico",
//   age: 20,
// };

// const person2 = person;
// const person3 = { ...person };

// // 5. 삼항조건 연산자
// const coffe = null;
// console.log( ? coffe."당얀하게" );
//  6. 조건부 랜더링
const coffee = {
  nemee: "americano",
  price: 2000,
};

const result = coffee.name && coffee.price;
