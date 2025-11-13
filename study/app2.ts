class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const a = new Point(3, 1);
const b = new Point(3, 6);

console.log(a.x);
console.log(a.y);
console.log(b.x);
console.log(b.y);
