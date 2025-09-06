// (   
//     function () {
//         var aName = "Barry";

//     }
// )();

// //iife 내부에서 정의된 변수는 외부에서 접근 불가 
// console.log(aName)

// var result = (function () {
//     var name = "Barry";
//     return name;
// })();

// console.log(result)


// const score = () => {
//     let count = 0;
//     return {
//         current: () => {return count},
//         incerement: () => {count++},
//         reset: () => {count = 0}
//     }
// }


// console.log(typeof score);
// console.log(score)

// console.log(score().current());
// score().incerement();
// console.log(score().current());




const score = (() => {
    let count = 0;
    return {
        current: () => {return count},
        incerement: () => {count++},
        reset: () => {count = 0}
    }
})()


console.log(typeof score);
console.log(score)

console.log(score.current());
score.incerement();
console.log(score.current());

// console.log(score().current());
// score().incerement();
// console.log(score().current());


// const incerement = () => {
//     let counter = 0;
//     console.log(counter);
//     const number = (num) =>
//         console.log(`it it ${num} number`);
//     return () => {counter++; number(counter);}
// }

// incerement();
// incerement();


const incerement = () => {
    let counter = 0;
    console.log("새 counter 시작:", counter);
    const number = (num) =>
        console.log(`it is ${num} number`);
    return () => { counter++; number(counter); }
}

// 클로저를 변수에 담아야 상태가 유지됨
const inc = incerement();  

inc(); // it is 1 number
inc(); // it is 2 number
inc(); // it is 3 number
