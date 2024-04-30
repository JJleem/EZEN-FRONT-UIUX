interface CharaterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class character implements CharaterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    public extra: string
  ) {}
  move(): void {
    console.log(`${this.moveSpeed}`);
  }
}
const test = () => console.log("스피드");
const characterA = new character("짱구", 50, "test");

characterA.move();
