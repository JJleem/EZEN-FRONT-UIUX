// 1. 사용자에게 키값을 받아온다
// 2. 사용자에게 몸무게값을 받아온다
// 3. 사용자에게 받아온 키&몸무게값을 가지고 적정체중을 구한다
// 4. 적정체중을 구한 이후에 +-5kg 의 범위를 설정한다.
// 5. 적정체중 여부의 조건에 따라서 출력할 문자열을 구분한다.
// 6. 최종결과값을 출력한다

// const userName = prompt("당신의 이름을 말씀해주세요");
// const userHeight = Number(prompt("당신의 키를 입력해주세요!", "ex.180"));
// const userWeight = Number(prompt("당신의 몸무게를 입력해주세요!", "ex.70"));

// const normalWeight = (userHeight - 100) * 0.9;
// let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;
// result = result
//   ? "적정체중이시네요! 축하드립니다."
//   : "적정체중이 아닙니다. 노력해주세요.";

// document.write(`${userName}님. ${result}`);

// 사용자로부터 오늘하루동안 지출한 교통비와 식비, 음료비를 받아서, 계산한후 해당 값이 1만원을 초과한 경우에는 "00원 초과하였습니다. 조금만 더 노력해주세요!"라고 웹브라우저 화면에 출력해주고, 만역 1만원을 초과하지 않은 경우에는 "00원 남았습니다. 돈관리 잘하셨습니다 라고 웹브라우저 화면에 출력해주세요."
// 1. 교통비와 식비 음료비를 받는다
// 2. 셋을 더한다
// 3. 총값이 1만원이 초과하는지 안하는지 구분한다
// 4. 구분후 나머지값을 경우에따라 출력한다.

const bus = Number(prompt("오늘 하루 지출한 버스비를 말씀해주세요"));
const food = Number(prompt("오늘 하루 지출한 식비를 말씀해주세요"));
const drink = Number(prompt("오늘 하루 지출한 음료비를 말씀해주세요"));
const all = bus + food + drink;
let result = all < 10000;
const result1 = 10000 - all;
const result2 = all - 10000;
result = result
  ? `${result1}원 남았습니다. 돈관리 잘하셨습니다.`
  : `${result2}원 초과했습니다. 조금만더 노력해주세요.`;
document.write(`${result}`);
