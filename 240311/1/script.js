// const pizza = new Promise((resolve, reject) => {

// });

// 외부에서 데이터를 가져올 때, 예외 조항 처리!!
// 에러가 발생했을 때, 미리 에러메세지를 커스텀!!
// try / catch / finally

// const likePizza = false;
// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다.");
//   } else {
//     reject("피자를 주문하지 않습니다.");
//   }
// });

// // method chaining 기법
// // 1개의 객체뒤에 연달아서 복수의 메서드 함수를 붙여서 실행시키드록 설계한 코딩 기법
// pizza
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("완료"));

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if (coffee != null && coffee != "") {
    document.querySelector(".start").innerText = `${coffee}`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다!");
  }
});

const display = (result) => {
  document.querySelector(".end").innerText = ` ${result} 준비완료!💨`;
  document.querySelector(".end").classList.add("active");
  document.querySelector(".start").classList.add("done");
};

const showErr = (err) => {
  document.querySelector(".start").innerText = `${err}`;
};

order.then(display).catch(showErr);
