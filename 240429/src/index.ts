// 타입 주석을 달았다!
// let n: number = 1;
// let b: boolean = true;
// let s: string = "hello";
// let o: object = {};

// 타입 불일치 발생 !! 즉각 경고!

// n = "";
// b = 1;
// s = false;

// 실제 실무에서는 타입주석 은 특별한 케이스가아니면 사용안함
// 타입스크립트는 타입 추론을걸 함

// let m = 1;
// let p = "hello";
// let q = false;
// let obj: {};

// let any: any = 0;
// any = false;
// any = undefined;
// any = null;

// let unTest: undefined = undefined;

// let numTest = 10;

// let o: object = {
//   name: "David",
//   age: 20,
// };
// o = {
//   name: 7,
//   age: 2,
// };

interface IPerson {
  name: string;
  age: Number;
}

// let good: IPerson = {
//   name: "Kevin",
//   age: 32,
// };

// let bad: IPerson = {
//   name: "Jack",
//   age: 30,
// };

interface IPerson2 {
  name: string;
  age: number;
  etc?: boolean;
}

let good1: IPerson2 = {
  name: "dasdaf",
  age: 1,
};
let good2: IPerson2 = {
  name: "dasdaf",
  age: 1,
  etc: true,
};
// 익명 interface => 고차함수
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = {
  name: "david",
  age: 20,
};

const printMe = (me: { name: string; age: number; etc?: boolean }) => {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age} `
  );
};
printMe(ai);
