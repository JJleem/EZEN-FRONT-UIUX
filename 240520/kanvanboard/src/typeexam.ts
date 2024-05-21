// TS 기본개념!!

// 1) 타입별칭 => 변수를 생성하듯이 간편하게 사용하고자 할때 쓴다.
// 함수 혹은 객체 등의 요소를 생성할 때, 시그니처 형식으로 타입을 정의하고자 할 때 간단하게 생성할수있음!

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

const user: User = {
  id: 1,
  name: "재준",
  nickname: "재춘",
  birth: "97",
  bio: "ㅎㅇ",
  location: "서울",
};

const user1: User = {
  id: 2,
  name: "재준ㅇ",
  nickname: "재춘ㅇ",
  birth: "972",
  bio: "ㅎㅇㅇㅁㄴ",
  location: "서울ㅇ",
};

// 타입별칭 사용의 원래목적?
// 최초로 정의된 객체의 모습
type ICountryCodes = {
  // korea: string;
  // UnitedState: string;
  // Japan: string;
  [key: string]: string;
};
const CountryCodes: ICountryCodes = {
  korea: "Ko",
  UnitedState: "US",
  Japan: "JP",
};

let num1: number = 10;
// 타입 리터럴
let num2: 10 = 10;

// num1 = num2;
// num2 = num1;
interface Animal {
  name: string;
  color: string;
}
interface Dog {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: "기린",
  color: "yellow",
};
let dog: Dog = {
  name: "뽀삐",
  color: "brown",
  breed: "진도",
};

animal = dog;

// 1) 타입별칭
// 2) 타입호환
// 3) 초과프로퍼티 검사 : 변수안에 담긴 어떤 값
// 4) 대수타입 (*)
// - Union 타입 : 합집합
// 5) 타입단언  (*단언 : 약속) -
// - useState("") => 버튼/ 이벤트 행위
// 리터럴 형식의 문자로 타입 바뀜
// [] => 약속(*단언) => 내부에 객체가 들어갈 배열의 타입으로 바뀔꺼야

// React.js 타입
// 함수형 컴포넌트 : 매개변수 타입정의 => props => 객체
// interface
// 반환값 : 타입 => void
// 고차함수 : type별칭을 활용해서 타입시그니처
// 함수타입 : 매개변수로 들어와야하는 타입 불분명: <> 제네릭형식으로 타입지정
// 아직 결정되지는 않았지만, 앞으로 이러한 타입이 될거야 => as 타입단언

interface Person02 {
  name: string;
  age: number;
}
// 사용자가 어떤 버튼을 클릭한다면, 아래 빈 객체안에 name과 age값이 포함될 예정이다!
let person = {} as Person02;

person.name = "";
person.age = 23;

// 초과프로퍼티 검사도 해결 가능!
// 타입단언 사용하기 위해서는 다음과 같은 조건!!
// value as type define
// value & type => 슈퍼 및 서브타입 구조를 띄고 있어야함!
//
let num4 = 10 as never;
let num5 = 10 as unknown;
let num6 = 10 as unknown as string;

interface Book {
  name: string;
  price: number;
}
interface ProgrammingBook {
  name: string;
  price: number;
  skill: string;
}
let book2: Book = {
  name: "자바스크립트",
  price: 33000,
  skill: "react.js",
} as Book;

let a: number | string | boolean = 1;

a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog01 = {
  name: string;
  color: string;
};

type Person01 = {
  name: string;
  language: string;
};
type Union1 = Dog01 | Person01;

type Intersection = Dog01 & Person01;

let union5: Intersection = {
  name: "",
  language: "",
  color: "",
};
