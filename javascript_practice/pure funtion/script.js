// let x = 0;
// const numberUp = () => x += 1;
// console.log(numberUp());
// console.log(x);



// let x = 0;
// const pureNumberUp = (num) => num += 1;
// console.log(pureNumberUp(x));
// console.log(x);

// console.log(pureNumberUp(x));
// console.log(x);

// const alphaberArray = ["A" , "B"];
// const addItemToArray = (originalArray , newItem) => {
//     originalArray.push(newItem);
//     return originalArray;
// }

// console.log(addItemToArray(alphaberArray, "C"));
// console.log(alphaberArray);





// const addItemToArray = (originalArray , newItem) => {
//     originalArray.push(newItem);
//     return originalArray;
// }

// console.log(addItemToArray(alphaberArray, "C"));
// console.log(alphaberArray);

const alphaberArray = ["A" , "B"];

const pureAddItemToArray = (originalArray , newItem) => {
    return [...originalArray , newItem]
}


console.log(pureAddItemToArray(alphaberArray, "C"));
console.log(alphaberArray);