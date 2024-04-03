const userDay = prompt("원하시는 기념일을 입력하세요", "ex. 2023-01-09");

const accent = document.querySelector(".accent span");
const date400 = document.querySelector("#date400");
const date500 = document.querySelector("#date500");
const date600 = document.querySelector("#date600");
const date700 = document.querySelector("#date700");
const now = new Date();
const firstDay = new Date(`${userDay}`);
const toNow = now.getTime();
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

accent.innerText = `${passedDay}일`;

const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    `#date${days}`
  ).innerText = `${year}년 ${month}월 ${date}일`;
};
calcDate(400);
calcDate(500);
calcDate(600);
calcDate(700);

// //400

// future = toFirst + 400 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// console.log(someday);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date400.innerText = `${year}년 ${month}월 ${date}일`;
// //500

// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// console.log(someday);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date500.innerText = `${year}년 ${month}월 ${date}일`;

// //600
// future = toFirst + 600 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// console.log(someday);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date600.innerText = `${year}년 ${month}월 ${date}일`;
// //700
// future = toFirst + 700 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// console.log(someday);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// date700.innerText = `${year}년 ${month}월 ${date}일`;
