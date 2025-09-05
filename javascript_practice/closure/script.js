// function outerFunction(outerVariable) {
//     return function innerFuntion(innerVariable) {
//         console.log("outer funtion: " + outerFunction);
//         console.log("Inner funtion: " + outerFunction);
//     }
// }

// const newFuntion = outerFunction("outside");

// console.log(newFuntion)


let a = "a";



function functionA() {
    let b = "b";
    function functionB(){
    let c = "c";
    console.log(a,b,c);
    }
    functionB();
    console.log(a,b);
}

functionA();