// if(조건식 => true) {
// 실행문이 실행됨
// }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// const userInput = prompt("당신의 이름을 입력하세요");
// if (userInput === null) {
//   alert("취소하셨습니다.");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }
// const score = Number(prompt("프로그램 점수 : "));
// // 예외조항 처리
// // 중첩 = 반복해서 사용할수있다.
// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }

//조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지, 홀수인지를 확인한 이후 알림창을 활용해서 사용자에게 짝수 혹은 홀수 입니다 라는 메세지를 출력해주세요!
// 1. 숫자를받는다 2.숫자에대해 짝수인지 홀수인지 확인한다 3. 확인후 메세지를 출력한다.
// const userNum = prompt("숫자를 하나 입력해주세요");

// // if (num != null) {
// //   const resetnum = Number(num);
// //   if (resetnum % 2 === 0) {
// //     alert("짝수입니다.");
// //   } else {
// //     alert("홀수입니다.");
// //   }
// // } else {
// //   alert("취소하셨습니다.");
// // }
// if (userNum != null) {
//   const resetNum = Number(userNum);
//   resetNum % 2 === 0 ? alert("짝수입니다.") : alert("홀수입니다.");
// } else {
//   alert("취소하셨습니다.");
// }

// camel표기법 : userPickNum
// snake표기법 : user_picknum
// 헝가리언표기법 : Userpicknum

// 1) 예약어 : 이미 JS & window 사용중인 고유명사
// 2) 변수명 작명 가장앞에 사용할수있는것들 :$,_,영문자가능 (*숫자/특수문자 사용 불가능)

// const userPickNum / USERPICKNUM 은 다르다 대문자랑 소문자 구별됨.

// 사용자에게 1~12까지의 숫자 중 하나를 받으세요. 그리고 전달받은 숫자에 따라서 다음과 같은 알림 메세지가 출력되게 해주세요!!
// 사용자가 입력한 숫자 : 9 ~11 : 알림창 ( 독서의 계절 가을이네요!)
// 사용자가 입력한 숫자 : 6 ~8 : 알림창 ( 여행하기좋은 여름!)
// 사용자가 입력한 숫자 : 3 ~5 : 알림창 ( 햇살 가득한 봄 이네요!)
// 사용자가 입력한 숫자 : 12 ~2 : 알림창 ( 스키의 계절 겨울이네요!)

// let month = prompt("현재는 몇월인가요?");

// if (month != null) {
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을 이네요!");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행하기좋은 여름!");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄 이네요!");
//   } else if (month >= 13) {
//     alert("정확히입력해주세요!");
//   } else {
//     alert("스키의 계절 겨울이네요!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// if 조건문 마지막 예제
// 사용자에게 id 와 pw값을 받으세요! 그리고 해당 id 와 pw 값이 다음과 같다면, "반갑습니다! 어서오세요!" 라는 알림메세지를 출력해주세요
// id: ezenit / pw : 1234
// 만약 id 만 일치하고 pw가 틀렸을 경우에는 "비밀번호를 확인해주세요!" 라는 알림 메세지를 출력
// 만약 id 와 pw 둘다 틀렸을 경우에는  "아이디를 확인해주세요!"" 라는 알림메세지를 출력해주세요!

// let id = prompt("id를 입력해주세요!");
// let pw = prompt("pw를 입력해주세요!");

// if (id != null && pw != null) {
//   if (id === "ezenit" && pw === "1234") {
//     alert("반갑습니다! 어서오세요!");
//   } else if (id === "eznenit" || pw !== "1234") {
//     alert("비밀번호를 확인해주세요!");
//   } else {
//     alert("아이디를 확인해주세요!");
//   }
// }

// const id = "ezenit";
// const pw = 1234;
// const userId = prompt("당신의 아이디는?");

// if (userId === id) {
//   const userPw = Number(prompt("당신의 비밀번호는?"));
//   if (userPw === pw) {
//     alert(`${id} 님 반갑습니다!`);
//   } else {
//     alert("비밀번호가 일치하지않습니다!");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다!");
//   location.reload();
// }

// switch (//조건식 => 참) {
//  case 1 : 실행문
//  break;
//  case 2 : 실행문
//  break;
//  case 3 : 실행문
//  break;
//  case 4 : 실행문
//  break;
//  case 5 : 실행문
//  break;
// }

// const mall = prompt(
//   "즐겨찾는 쇼핑몰을 입력해주세요",
//   "쿠팡, G마켓, 11번가, 마켓컬리"
// );

// if (mall !== null) {
//   switch (mall) {
//     case "쿠팡":
//       location.href = "https://www.coupang.com/";
//       break;
//     case "G마켓":
//       location.href = "https://www.gmarket.co.kr/";
//       break;
//     case "11번가":
//       location.href = "https://www.11st.co.kr/";
//       break;
//     case "마켓컬리":
//       location.href = "https://www.kurly.com/";
//       break;
//     default:
//       alert("잘못입력하셨습니다!");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다.");
//   location.reload();
// }

// 사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요.
// 쇼핑몰 후보 : 쿠팡 / G마켓 / 11번가 / 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군안에 존재한다면, prompt창에 "확인" 클릭하는순간 해당 쇼핑몰로 이동하게 만들어주세요!
// window 객체안에 location 이동해주는 객체
// location href => 경로지정해주는 속성 location.href = "https://www.coupang.com/"


