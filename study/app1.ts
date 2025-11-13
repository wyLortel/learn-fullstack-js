class shape {
  type: string;
  color: string;

  constructor(type: string, color: string) {
    this.type = type;
    this.color = color;
  }
}

const circle = new shape("circle", "red");
const sqare = new shape("sqare", "blue");

console.log(circle.type);
console.log(sqare.color);
