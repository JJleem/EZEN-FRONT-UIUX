//버튼찾기
// 밑에찾기

const btn = document.querySelector("#view");
const detail = document.querySelector("#detail");
console.log(detail);
// btn.onclick = () => {
//   if (!detail.classList.contains("checked")) {
//     detail.classList.add("checked");
//     console.log(btn.onclick);
//   } else {
//     detail.classList.remove("checked");
//   }
// };
btn.onclick = function () {
  detail.classList.toggle("checked");
};
