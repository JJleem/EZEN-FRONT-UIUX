const arr = [130, 135, 148, 140, 145, 150, 150, 153];

const solution = (arr) => {
  let answer = 1;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      answer++;
    }
  }

  return answer;
};
console.log(solution(arr));
