// 프로그래밍 언어 2가지 실행관련 지향 방식

// 실행문 방식
const arrow1 = (a: number, b: number) => {
  return a + b;
};

//표현식문 방식
// 어떠한 프로그래밍 코드를 실행함과 동시에 값을 반환(*전달)할 수 있는 언어 들이 뒤이어 많이 선보이게됨
//JS & TS & Python
const arrow2 = (a: number, b: number) => a + b;

//실행문 && 표현식 문 => 다중패러다임 언어
// 고차함수 && 클로져 개념 이해하기힘들수도,, 실행문 및 표현식문 이해못하면

//표현식 vs 표현식문
// 인강 : 표현식! return

//표현식
//도출될 결과값을 출력하는 기능까지만 하는 문장?!
const a = 1;
const b = 0;
if (a > b) {
  console.log("a > b");
}

//표현식 문
//표현식을 통해서 도출된 결과값을 어딘가에 담아서 관리할 수 있는 종합적인 문장?!
const isGreator = (a: number, b: number): boolean => a > b;
