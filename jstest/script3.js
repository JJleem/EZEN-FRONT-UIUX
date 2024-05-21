// 1:가위 2: 바위 3: 보
const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];

const solution = (A, B) => {
  let answer = "";
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      answer += "D";
    } else if (A[i] === 1 && B[i] === 2) {
      answer += "B";
    } else if (A[i] === 2 && B[i] === 1) {
      answer += "A";
    } else if (A[i] === 3 && B[i] === 2) {
      answer += "A";
    } else {
      answer += "B";
    }
  }
  return answer;
};
console.log(solution(A, B));
