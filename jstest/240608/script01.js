const a = "(()(()))(()";

// const solution = (a) => {
//   console.log(a);
//   const left = "(";
//   const right = ")";
//   let answer = "";
//   const spreadA = [...a];
//   if (spreadA.map((arrw) => arrw === left)) {
//     console.log(spreadA.forEach((arrw) => arrw === right).length);
//     if (
//       (spreadA.map((arrw) => arrw === left).length = spreadA.map(
//         (arrw) => arrw === right
//       ).length)
//     )
//       answer = "yes";
//     else answer = " no";
//   }
//   return answer;
// };
// console.log(solution(a));

const solution = (a) => {
  let answer = "YES";
  let stack = [];
  for (let x of a) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        return "No";
      }
      stack.pop();
    }
  }
  if (stack.length > 0) {
    return "NO";
  }
  return answer;
};
console.log(solution(a));
