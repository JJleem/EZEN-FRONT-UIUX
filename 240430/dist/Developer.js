// 추상 클래스
// 추상 : 여러개의 사물이나 개념의 공통적ㅇ니 요소를 추철해서 만들ㄹ어내는 개념이다
// 공통적인 속성을 가지고 있는 서로다른 요소의 객체를 만들어야하는 경우!
// 단, 추상클래스가 되려면 반드시 공통적인 속성 및 메서드가 1개이상 전재해야함
//추성컨셉의 속성 및 메서드 1개이상
class Developer {
    drink() {
        console.log("drink");
    }
}
class FrontEndDeveloper extends Developer {
    coding() {
        console.log("develp");
    }
}
const dev = new FrontEndDeveloper();
export {};
// 추상 클래스도 "클래스"
// 일반적인 다른 클래스처럼 인스턴스를 만들어낼 수 있을까?........................................
//# sourceMappingURL=Developer.js.map