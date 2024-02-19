// 사용자로부터 숫자 하나를 받으세요!, 해당 숫자가 양수인지 , 음수인지, 0인지 판단해서 알림창을 활용해서 이에대한 결과를 출력해주세요

const num = parseInt(prompt("숫자를 하나 입력해주세요!"));
const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}은 양수입니다.`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다.`);
  } else {
    alert(`${n}은 0입니다!`);
  }
};

if (!isNaN(num)) {
  isPositive(num);
}

// console.log(isNaN("hi"));
