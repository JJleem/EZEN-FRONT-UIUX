// (몸무게 / (키 / 100 => 제곱)
// 값찾아오기
// 연산작업하기
// reult에 결과 표시
// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const btn = document.querySelector("input[type='submit']");
// const result = document.querySelector(".result");
// let calheight = 0;
// // const bmi = weight / (calheight * calheight);

// calheight += (height.value / 100);

// console.log(calheight);
// const bmi = () => {
//   if (height.value === Number && weight.value === Number) {
//     const cal = weight.value / (calheight.value * calheight.value);
//   }
//   return cal;
// };

// console.log(height);
// console.log(weight);
// console.log(bmi);
// // console.log(bmi);

// btn.onclick = function (e) {
//   e.preventDefault();
//   result.innerText = bmi.value;
//   console.log(bmi);
// };

const form = document.querySelector("form");

const display = (bmi) => {
  const result = document.querySelector(".result");
  let group;
  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }
  result.innerText = `${bmi} -> ${group} 입니다.`;
};

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  if (weightInput.value !== "" && heightInput.value !== "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const bmi = calculate(weight, height);
    display(bmi);
    heightInput.value = "";
    weightInput.value = "";
  }
};

form.onsubmit = formHandler;
