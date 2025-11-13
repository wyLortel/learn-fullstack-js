// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello my name is ${this.name}`);
// };

// const john = new Person("john");
// john.greet();

// class Car{
//   #brand

//   constructor(brand){
//     this.#brand = brand
//   }
//   getBrand(){
//     return this.#brand;
//   }

//   updateBrand(newBreand){
//     if(newBreand.lenght>0){
//       this.#brand = newBreand
//     }
//   }
// }

// const car = new Car("hyunadai");
// console.log(car.getBrand())

// class Animal {
//   speak(){
//     console.log("Some sound")
//   }
// }

// class Dog extends Animal {
//   bark(){
//     console.log("Woof")
//   }
// }

const canBark = (state) => ({
  bark: () => console.log(`${state.name}barks!`),
});

const canRun = (state) => ({
  run: () => console.log(`${state.name}runs!`),
});

const createDog = (name) => {
  const state = { name: name };
  return Object.assign({}, canBark(state), canRun(state)); //Object.assign({}, ...) 빈 객체를 반들고 뒤에오는 객체들을 모두 복사해서 붙임
};

const dog = createDog("buddy");
dog.bark();
dog.run();

function fetchData(callback) {
  setTimeout(() => {
    callback("데이터 수신 완료");
  }, 1000);
}

fetchData(function (result) {
  console.log(result);
});
