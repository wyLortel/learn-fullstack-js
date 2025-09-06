// const sum = (x , y) => x + y;


// const curridesum = x => y => x+y;

// console.log(sum(10,20))
// console.log(curridesum(10)(20))



// const makeFood = (ingredient1) => {
//     return (ingredient2) => {
//         return (ingredient3) => {
//             return `${ingredient1} ${ingredient2} ${ingredient3}`
//         }
//     }
// }


// const hambugger = makeFood("Bread")("Ham")("TOmato");
// console.log(hambugger)


const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>
    `${ingredient1} ${ingredient2} ${ingredient3}`

const newhambugger = cleanerMakeFood("Bread")("Ham")("TOmato");
console.log(newhambugger)