class character {
    name;
    moveSpeed;
    extra;
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }
    move() {
        console.log(`${this.moveSpeed}`);
    }
}
const test = () => console.log("스피드");
const characterA = new character("짱구", 50, "test");
characterA.move();
export {};
//# sourceMappingURL=ClassExam02.js.map