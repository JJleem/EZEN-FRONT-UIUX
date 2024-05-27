const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
const solution = (arr) => {
  const n = arr.length;
  const dy = [0, 1, 0, -1];
  const dx = [-1, 0, 1, 0];
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }

      if (flag) answer++;
    }
  }
  return answer;
};

console.log(solution(arr));

// const solution = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (
//         arr[i][j] > arr[i][j + 1] || arr[i][j + 1] === null ? 0 : arr[i][j + 1]
//       ) {
//         if (
//           arr[i][j] > arr[i][j - 1] || arr[i][j - 1] === null
//             ? 0
//             : arr[i][j - 1]
//         ) {
//           if (
//             arr[i][j] > arr[j + 1][i] || arr[j + 1][i] === null
//               ? 0
//               : arr[j][i + 1]
//           ) {
//             if (
//               arr[i][j] > arr[j - 1][i] || arr[j - 1][i] === null
//                 ? 0
//                 : arr[j][i - 1]
//             )
//               sum++;
//           }
//         }
//       }
//     }
//   }
//   return sum;
// };
// console.log(solution(arr));
