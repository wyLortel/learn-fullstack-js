// function makeIterater(numbers) {
//   let nextIndex = 0;


//   return {
//     next:function(){
//       return nextIndex < numbers.length?
//         {value: numbers[nextIndex++], done:false}:
//         {value : undefined, done:true}
//     }
//   }
// }


// const  numbersArray = [1,2,3];


// const numbersIterlater = makeIterater(numbersArray);


// console.log(numbersIterlater.next());
// console.log(numbersIterlater.next());
// console.log(numbersIterlater.next());
// console.log(numbersIterlater.next());




function* simpleGen() {
  console.log("첫 번째 실행");
  yield 1;

  console.log("두 번째 실행");
  yield 2;

  console.log("세 번째 실행");
  yield 3;
}

const g = simpleGen();

console.log(g.next()); 
console.log(g.next()); 
console.log(g.next()); 
console.log(g.next()); 

