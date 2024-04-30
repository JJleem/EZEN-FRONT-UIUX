// JS Class => TS 접근제어자
//반복적인 객체를 생성하고자 할 때 비효율성 감소!!
// const studentA = {
//   name: "짱구",
//   grade: "A+",
//   age: 22,
//   study() {
//     console.log("죽도록공부함");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   },
// };
// const studentB = {
//   name: "슛돌이",
//   grade: "B+",
//   age: 21,
//   study() {
//     console.log("축구를 좋아함");
//   },
//   introduce() {
//     console.log("공만 주세요!");
//   },
// };
class Student {
    //필드
    name;
    grade;
    age;
    // 생성자 함수
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    study() {
        console.log("열심히공부함");
    }
    introduce() {
        console.log(`${this.name}님 안녕하세요!`);
    }
}
const studentA = new Student("짱구", "A+", 22);
console.log();
studentA.study();
studentA.introduce();
// JS Class 생성 후 상속기능!!
class StudentDeveloper extends Student {
    favoriteSkill;
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}
const studentB = new StudentDeveloper("슛돌이", "B+", 20, "javascript");
studentB.programming();
export {};
// TS class 를 생성하거나 상속하거나 받는 개념 거의 동일하나, 살짝 접근제어자 + 타입정의 만 상이함
//# sourceMappingURL=classExam.js.map