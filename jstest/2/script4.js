const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

const solution = (arr) => {
  let result = 0;
  let count = 0;
  for (let x of arr) {
    if (x === 1) {
      count++;
      result += count;
    } else {
      count = 0;
    }
  }
  return result;
};
console.log(solution(arr));
