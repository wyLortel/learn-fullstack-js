// // const sym1 = Symbol();
// // const sym2 = Symbol();
// // const sym3 = Symbol("hi");
// // console.log(sym3.description);
// // console.log(sym1 === sym2);


// let carA = {
//     id: 1,
//     name: "morning",
//     brand: "kia",
//     price : 10000,
//     [idSym]:300
// }


// // carA.id = 300;

// // const idSym = Symbol("id");
// // carA[idSym] = 300;



// // console.log(Object.getOwnPropertyNames(carA));

// // for (const key in carA){
// //     console.log(key);
// // }


// // console.log(Object.getOwnPropertySymbols(carA));


// console.log(carA);


// const Red = Symbol("red");
// const ORANGE = Symbol("orange");
// const YELLOW = Symbol("yellow");
// const BLUE = Symbol("blue")
// const dog = "blue";



// function getImportantLevel(color){
//     switch (color) {
//         case Red:
//             return "very important";
//         case ORANGE :
//             return "omportant";
//         case YELLOW:
//             return "little important";
//         case BLUE:
//             return "not important";
//         default:
//             console.log(`${color} not inclueded`)
//     }
// }


// console.log(getImportantLevel(BLUE));
// console.log(getImportantLevel(dog));


const length = Symbol("length")

class Car {
  constructor() {
    this[length] = 0;
  }

  add(brand, name) {
    this[brand] = name;
    this[length]++;
  }
}

let myCar = new Car();
myCar.add("kia", "morning");
myCar.add("hyundai", "tucson");
myCar.add("genesis", "gv80");

for (const key in myCar) {
  console.log(key, myCar[key]); // ← 소문자!
}





























