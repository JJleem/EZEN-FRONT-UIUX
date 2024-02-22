// const box = document.querySelector("#box");
// box.addEventListener("click", (e) => {
//   alert(`이벤트발생위치 : ${e.pageX}, ${e.pageY} 입니다.`);
// });

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code},
  key: ${e.key}
  `;
});
