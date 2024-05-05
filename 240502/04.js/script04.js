// 오늘이 몇일인지 받고 차량번호
//25, 23,11, 47,53,17,33
// 오늘이 3일이라면 걸리는수 3대

const day = Number(prompt("오늘 날짜 일의 자리수 입력"));
const carNum = [25, 23, 11, 47, 53, 17, 33];

const solution = (day, carNum) => {
  let answer = 0;
  for (let car of carNum) {
    if (car % 10 === day) answer++;
  }
  return answer;
};

console.log(solution(day, carNum));
