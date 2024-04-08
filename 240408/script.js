// const studentA = {
//   name: "jason",
//   grade: "A+",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다.");
//   },
// };

// const studentB = {
//   name: "Mraz",
//   grade: "B-",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다.");
//   },
// };

// class student {
//   studentA(name, grade, study, introduce) {}
// // }
// // console.log(student
// // );

// let student = class {
//   constructor(name, grade) {
//     this.name = name;
//     this.grade = grade;
//   }
// };
// console.log(student);

class Student {
  name;
  age;
  grade;
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  //method
  pass() {
    console.log(`${this.name} Short pass!`);
  }
  kick() {
    console.log(`${this.name} Long kick!`);
  }
}

const studentA = new Student("Ruben", 28, "A-");
console.log(studentA);
console.log(studentA.pass());
console.log(studentA.kick());

//Class 를 활용해서 Instance 객체를 생성하고자할때 , 상속!

class StudentDeveloper extends Student {
  favoriteSkil;

  constructor(name, age, grade, favoriteSkil) {
    super(name, age, grade);
    this.favoriteSkil = favoriteSkil;
  }
  programming() {
    console.log(`${this.favoriteSkil}로 프로그래밍 함`);
  }
}

const studentB = new StudentDeveloper("Jeremy", 24, "B+", "JS");
