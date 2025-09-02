// for(let row = 2; row <= 9; row+=2 ) {
//     for(let col = 1; col <= 9; col++){
//         console.log(`${row} x ${col} = ${row * col}`)
//     }
// }



// for(let row = 2; row <= 9; row++ ) {
//     for(let col = 1; col <= 9; col++){
//         let result = row * col
//         if(result % 2 == 0){
//             continue
//         }
//         console.log(`${row} x ${col} = ${result}`)
//     }
// }


for(let row = 1; row <=5; row++){
    let stars = "";
    for(let col = 1; col <= row; col++){
        stars += "*";  
    }
    console.log("*")
}