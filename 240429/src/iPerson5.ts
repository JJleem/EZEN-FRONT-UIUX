// 추상 클래스를 생성할 때에는 class 명령어 앞에 abstract 붙인다.
// 반드시 추상클래스를 만들때에는 하나 이상의 abstract 메서드(함수)=> 추상화 되어야 할 속성이 존재해야함 !
abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}
