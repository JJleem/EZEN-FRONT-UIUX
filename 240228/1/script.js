// //객체!!
// //프로퍼티!!
// //프로퍼티 - 속성
// //key : value 1쌍 => 프로퍼티
// const book1 = {
//   title: "자바스크립트",
//   pages: 648,
// };

// //온점 표기법
// console.log(book1.title);

// //대괄호 표기법
// console.log(book1["pages"]);

// book1.pages = 50;
// console.log(book1);
// book1.author = "Jaejun";
// console.log(book1);

// new Date();
// new Object();
// new Array();

// //프로토타입 = 붕어빵 틀
// //인스턴스 = 틀을 활용해서 만들어진 붕어빵
// const book2 = new Object();
// console.log(typeof book2);
// book2.title = "typescript";
// book2.pages = 500;
// book2.author = "Eun";

// console.log(book2);

// delete book2.pages;
// console.log(book2);

//객체 중첩!!
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {

//   }
// }
// if (true {
//   if (true) {
// console.log("true")
//   }
// }))

// const student = {
//   name: "david",
//   score: {
//     history : 85 ,
//     science= 79
//     avvrage={function() {
//       return (this.)
//     }

//     )}
//   }
// }

// const book3 = {
//   title: "파이썬",
//   pages: 360,
//   buy() {
//     console.log("이책을 구입했습니다");
//   },
// };
// console.log(book3);

//this
//1) addEventListener => 콜백함수 / 화살표함수 => window를의미하게됨.
//2) addEventListener => 콜백함수 / 익명함수 => 바로상위요소 뜻함
//3) 객체 메서드 함수를 생성할 때 / 익명함수 => this 바로 위에 상위요소
//4) 객체 메서드 함수를 생성할 때 / 화살표 함수 => this => window

// const book5 = {
//   title: "HTML5 + CSS3",
//   pages: 500,
//   author: "Peter",
//   done: false,
//   finish: function () {
//     this.done === false ? console.log("읽는중") : console.log("완독");
//   },
// };

// book5.finish();

//숫자, 문자, 논리 => 원시타입!! : primitive
//객체, 배열 => 참조타입!! : reference
// 원본 데이터 자료 && 사본 데이터 자료

// const book1 = {
//   title: "인구와 투자의 미래",
//   pages: 500,
//   publish: "2024-02-28",
//   price: 30000,
// };
// // 커스터마이징 된 객체를 생성!!
// 생성자 "함수"!! => 다른 일번적인 함수와는 기능 상이함
// 함수이름 첫글자 => 대문자 입력!!
// 생성자 함수 = 붕어빵틀
// 만들어질 객체 = 붕어빵

function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는중") : (str = "완독");
  };
}

const book1 = new Book("자바스크립트", 648, false);
const book2 = new Book("파이썬", 460, true);
console.log(book1);
console.log(book2);

//블랙홀의 저주 :

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  fisnish() {
    let str = "";
    this.done === false ? (str = " 읽는중") : (str = "완독");
  }
}

const book4 = new Book2("Html5", 380, true);

console.log(book4);
