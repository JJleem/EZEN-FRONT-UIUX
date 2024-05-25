//회문문자열?
//
// const text = "gooG";

// const solution = (text) => {
//   const test = text.toLowerCase();
//   let arr = [...test];
//   let n = arr.length;
//   let arr1 = [];
//   let arr2 = [];
//   let answer = "";

//   for (let i = n - n; i < arr.length; i++) {
//     arr1.push(arr[i]);
//   }
//   for (let i = n - n; i < arr.length; i++) {
//     arr2.push(arr[n - i - 1]);
//   }
//   if (arr1 === arr2) {
//     answer = "Yes";
//   } else {
//     answer = "Yes";
//   }
//   return answer;
// };
// solution(text);
// console.log(solution(text));

const text = "goddoggoo31231313og";

const solution = (text) => {
  const test = text.toLowerCase();
  let n = test.length;
  let answer = "Yes";

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (test[i] !== test[n - i - 1]) {
      return "No";
    }
    return answer;
  }
};

console.log(solution(text));
