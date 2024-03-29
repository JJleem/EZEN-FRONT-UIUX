// const season = [];
// season[0] = "spring";
// season[1] = "summer";
// console.log(season);

// const fruits = new Array("사과", "복숭아", "포도");
// fruits[4] = "배";
// console.log(fruits);

// fruits[0] = "오렌지";
// console.log(fruits);
// console.log(fruits.length);

// 배열의 전체 아이템 개수 : length
// 배열의 인덱스는 반드시 0부터 시작
// => 배열안에 가장 마지막 아이템의 인덱스값 => arr.length -1

// code를 작성해서 UI로 구현하고자 하는 거의 대부분의 값들 => 복수!!
// 1개 이상의 이미지 혹은 동영상 들!!

// 배열을 사용하는 정말 중요한 이유중 하나!! => 반복문!!
// 일반 for문 / for of 문 / forEach
const colors = ["red", "green", "blue", "white", "black"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// colors.forEach((color) => {
//   console.log(color);
// });
colors.forEach((color, index) => {
  console.log(`colors[${index}] : ${color}`);
});

colors.forEach((color, index, array) => {
  console.log(`[${array}][${index}]: ${color}`);
});
