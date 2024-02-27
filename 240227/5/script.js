// 오늘 옆에있는 친구들과 점심을 같이 먹기로했다.
// 짜장면 , 돈가스, 부대찌개, 회덮밥, 마라탕
// 상기 메뉴를 랜덤으로 1개 메뉴 선택 해서
//웹브라우저에 출력
const menu = document.querySelector("#menu");
const randomNumber = Math.ceil(Math.random() * 5);
console.log(randomNumber);
console.log(menu);
switch (randomNumber) {
  case 1:
    menu.innerText = "짜장면";
    break;
  case 2:
    menu.innerText = "돈가스";
    break;
  case 3:
    menu.innerText = "김치찌개";
    break;
  case 4:
    menu.innerText = "라멘";
    break;
  case 5:
    menu.innerText = "제육볶음";
    break;
}

// const game = (user, computer) => {
//   if (user === computer) {
//     message = "무승부!";
//   } else {
//     switch (user + computer) {
//       case "가위보":
//       case "바위가위":
//       case "보바위":
//         message = "사용자 승리!";
//         break;
//       case "가위바위":
//       case "바위보":
//       case "보가위":
//         message = "컴퓨터 승리!";
//         break;
//     }
//   }
// //   show(user, computer, message);
// };
