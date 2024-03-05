// React => 구조 분해 할당!!
const fruits = ["사과", "복숭아"];
// const apple = fruits[0];
// const peach = fruits[1];

const [apple, peach] = fruits;
console.log(apple, peach);

// const [teacher, ...students] = ["park", "kim", "choi", "leem"];
// console.log(teacher, students);

const member = {
  name: "kim",
  age: 25,
};

const { name: username, age } = member;
console.log(username, age);
// 객체의 구조분해할당 시, 반드시 유의사항!!
// 구조분해할당 값을 전달받을 변수이름 = 객체의 key명 과 동일해야한다.
// 값을가져온이후에는 ( : 바꾸고싶은이름 ) 으로 변경할수있음

const student = {
  name: "슛돌이",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "Lee", "Son"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(history, f2);
