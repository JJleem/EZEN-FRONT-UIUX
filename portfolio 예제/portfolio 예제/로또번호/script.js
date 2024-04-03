const button = document.querySelector("button");
const result = document.querySelector("#result");
const one = result.querySelector(".one");
const two = result.querySelector(".two");
const three = result.querySelector(".three");
const four = result.querySelector(".four");
const five = result.querySelector(".five");
// 로또 규칙!!
// 한 번 추첨 시 : 6개의 숫자 (*반드시 중복x)

// 각각의 6개의 숫자 : 최대 45까지 가능
// 1~45까지의 구간 숫자, 랜덤 => 수학객체 random() * 45

// 반복문!!! * 6번

// 절대 중복x => Set()
// add()

// result 출력!!!
// innerText

// const luckyNumber = {
//   digitCount: 6,
//   maxNumber: 45,
// };

// const lottoPlay = () => {
//   const { digitCount, maxNumber } = luckyNumber;
//   const myNumber = new Set();

//   for (let i = 0; i < digitCount; i++) {
//     myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
//   }
//   if (myNumber.size !== 6) {
//     for (let i = 0; i < digitCount; i++) {
//       myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
//     }
//   } else {
//     result.innerText = ` ${[...myNumber][0]} , ${[...myNumber][1]} , ${
//       [...myNumber][2]
//     } , ${[...myNumber][3]}, ${[...myNumber][4]}  + 추가번호 ${
//       [...myNumber][5]
//     }`;
//   }
// };

// button.addEventListener("click", lottoPlay);

// const luckyNumber = {
//   digitCount: 6,
//   maxNumber: 45,
// };

// const lottoPlay = () => {
//   const { digitCount, maxNumber } = luckyNumber;
//   const myNumber = new Set();

//   while (myNumber.size < digitCount) {
//     myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
//   }

//   // Set을 배열로 변환하고 정렬
//   const sortedNumbers = [...myNumber].sort((a, b) => a - b);

//   // 정렬된 번호를 문자열로 변환하여 출력
//   result.innerText = `${sortedNumbers[0]},${sortedNumbers
//     .slice(0, 5)
//     .join(", ")} + 추가번호 ${sortedNumbers[5]}`;

// };

// button.addEventListener("click", lottoPlay);

// const luckyNumber = {
//   digitCount: 6,
//   maxNumber: 45,
// };

// const lottoPlay = () => {
//   const { digitCount, maxNumber } = luckyNumber;
//   const myNumber = new Set();

//   while (myNumber.size < digitCount) {
//     myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
//   }

//   const sortedNumbers = [...myNumber].sort((a, b) => a - b);
//   const resultElement = document.getElementById('result');

//   // 조건에 따른 배경색 변경
//   sortedNumbers.forEach(number => {
//     const span = document.createElement('span');
//     span.textContent = number + ' ';
//     if (number < 11) {
//       span.style.backgroundColor = 'yellow';
//     } else if (number < 31) {
//       span.style.backgroundColor = 'blue';
//     } else {
//       span.style.backgroundColor = 'red';
//     }
//     resultElement.appendChild(span);
//   });
// };

// button.addEventListener("click", lottoPlay);

document.getElementById("generate").addEventListener("click", function () {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = ""; // 기존 번호들을 초기화

  const luckyNumber = {
    digitCount: 6,
    maxNumber: 45,
  };

  const lottoPlay = () => {
    const { digitCount, maxNumber } = luckyNumber;
    const myNumber = new Set();

    while (myNumber.size < digitCount) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }

    const sortedNumbers = [...myNumber].sort((a, b) => a - b);

    // 조건에 따른 배경색 변경
    sortedNumbers.forEach((number) => {
      const span = document.createElement("span");
      span.textContent = number + " ";
      if (number < 11) {
        span.style.backgroundColor = "gold";
      } else if (number < 31) {
        span.style.backgroundColor = "dodgerblue";
      } else {
        span.style.backgroundColor = "crimson";
      }
      resultElement.appendChild(span);
    });
  };

  const bonusSpan = document.createElement("span");
  bonusSpan.textContent = "+ 추가번호: " + bonusNumber;
  bonusSpan.style.backgroundColor = "green";
  resultElement.appendChild(bonusSpan);

  lottoPlay();
});
