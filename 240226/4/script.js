// 사용자로부터 "오늘부터 며칠간 만 보 걷기"를 했는지를 물어보고 임의 숫자를 받으세요!
// **일 연속 달성 출력될 수 있도록 해주세요!
// const userDay = prompt("몇일간 만 보 걷기를 하셨나요?", "ex. 10");
// const day = document.querySelector("#result");
// day.innerText = `${userDay} 일 연속 달성!`;
const userQuery = prompt(
  "만보 걷기를 시작한 날짜를 입력해주세요",
  "ex. 2024-02-01"
);
const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));
result.innerText = passedDay;
