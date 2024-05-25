// const arr = [7, 3, 9, 5, 6, 12];

// const solution = (arr) => {
//   let result = [7];

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       result += arr[i + 1];
//     }
//   }

//   return result;
// };
// console.log(solution(arr));

//내가한거

const arr = [7, 3, 9, 5, 6, 12];

const solution = (arr) => {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
};
console.log(solution(arr));
