// const myFunction = (number) => {
//   console.log(number);
//   myFunction(number + 1);
// };

// myFunction(1);

//브레이크 => 기저조건! => 탈출조건

// const funcB = () => {
//   let a = 10;
//   let b = 5;
//   return a - b;
// };

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   let c = funcB();
//   return a + b + c;
// };

// 재귀함수를 하향식 방식으로 작성하는 것을 추천!
// const factiorial = (number) => {
//   return number * factiorial(number - 1);
// };

// [1,2,3,4,5] => 해당 배열안에 입력되어있느 숫자를 모두 더하는 하향식 재귀함수를 활용해서 결과값을 도출하세요

const arr = [1, 2, 3, 4, 5];
const solution = (arr) => {
  return arr[arr.length - 1] + solution[arr.slice(0, -1)];
};
solution(arr);

const hanoi = () => {
 consoellfalfl 
}