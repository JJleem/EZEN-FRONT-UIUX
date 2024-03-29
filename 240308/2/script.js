// JS 언어 이야기 !!!
// 객체지향 언어

// 외부에서 json형식의 데이터를 가져와서 웹브라우저 출력해야하는 상황!!

// JS언어 => 태생적으로 동기 처리 방식을 함

// 동기 => 순차적으로 무언가를 처리한다는 뜻!!
// 예시 => 커피숍
//
// JS 비동기처리방식 총 3번에 걸쳐서 업그레이드 되어옴!!
// 1) 콜백함수
// 2) Promise 객체
// 3) async, await 키워드사용

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB();
// displayC();

// 제 아무리 displayB 함수의 호출이 C보다 먼저 발생했어도,
// displayC함수의 결과값이 먼저나오게 할 수만있다면, 우리는 비동기처리가 된것처럼 만들어낼 수 있는것이다!

// const displayA = () => {
//   console.log("A");
// };
// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB();
// displayC();

// const displayA = () => {
//   console.log("A");
// };
// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };
// displayA();
// displayB(displayC);

// const display = (result) => {
//   console.log(`${result} 준비 완료`);
//   // setTimeout(() => {
//   //   callback(coffee);
//   // }, 3000);
// };

// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문 접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// order("아메리카노", display);

// 콜백 지옥
const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("stop!!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
displayLetter();
// Promise 객체
