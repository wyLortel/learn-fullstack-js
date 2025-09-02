// let i = 0;
// while (true) {
//     if (i ==5){
//         break
//     }
//     i++
// }

// console.log(i)


let i = 0;

while (i < 10) {
    i++;
    if(i % 2 === 0) {
        continue;
    }
    console.log(i);
}