//회문문자열?
//
const text = "found7, time: study; Yduts; emit, 7Dnuof";

// const solution = (text) => {
//   const test = text.toLowerCase();
//   const replaceTest = test.replace(/[^a-z]/g, "");

//   let arr = [...replaceTest];
//   let n = arr.length;
//   let arr1 = "";
//   let arr2 = "";
//   let answer = "";

//   for (let i = n - n; i < Math.floor(n / 2); i++) {
//     arr1 += arr[i];
//   }

//   for (let i = n - n; i < Math.floor(n / 2); i++) {
//     arr2 += arr[n - i - 1];
//   }

//   console.log(arr1);
//   console.log(arr2);

//   if (arr1 === arr2) {
//     answer = "Yes";
//   } else {
//     answer = "NO";
//   }
//   return answer;
// };

// console.log(solution(text));

const solution = (str) => {
  let answer = "YES";
  const test = str.toLowerCase().replace(/[^a-z]/g, "");
  if (test.split("").reverse().join("") !== test) {
    return "No";
  }
  return answer;
};
console.log(solution(text));
