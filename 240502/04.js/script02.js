// const a = Number(prompt("숫자입력"));

// const solution = (n) => {
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     answer += i;
//   }
//   return answer;
// };
// console.log(solution(a));

// console.log(a);
// const numbers = [Number(a)];
const arr = [5, 3, 7, 11, 2, 9];
const sortedNumbers = (arr) => {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.legth; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
};
console.log(sortedNumbers(arr));
// [...numbers].sort((a, b) => a - b);
// console.log(sortedNumbers.slice(0, 1));
