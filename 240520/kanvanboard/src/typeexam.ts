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
