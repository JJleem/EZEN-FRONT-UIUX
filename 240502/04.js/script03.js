const arr = [12, 77, 38, 41, 53, 92, 85];

// const solution = (arr) => {
//   let num = 0;

//   arr.forEach((ar) => {
//     if (ar % 2 === 1) {
//       num += ar;
//     }
//   });
//   return num;
// };

// console.log(solution(arr));

// arr.filter((ar) => (ar % 2 === 1 ? ar : ""));

// const filteredArr = arr.filter((ar) => (ar % 2 === 1 ? ar : ""));
// console.log([...filteredArr].sort((a, b) => a - b));

// filteredArr.sort((a, b) => a - b);
// filteredArr.slice(0, 1);
// console.log(filteredArr.slice(0, 1));

const solution = (arr) => {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
      if (num < min) min = num;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
};
console.log(solution(arr));
