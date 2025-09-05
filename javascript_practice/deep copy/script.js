// const aArray = [1,2,3];

// const bArray = [...aArray,4];

// console.log(aArray)
// console.log(bArray)

// console.log(aArray === bArray);


// const cArray = Object.assign([],bArray);
// console.log('cArray' , cArray);
// console.log(bArray === cArray);

// cArray.push([5,6,7]);
// console.log(cArray);
// const dArray = [...cArray,10]
// console.log(dArray)

// dArray[4].push(8);

// console.log(cArray);
// console.log(dArray);



const aObject ={
    "a" : "a",
    "b" : "b" ,
    "cObject" : {"a" : 1 , "b" : 2}
}

Object.freeze(aObject);
aObject.a = "c";
console.log("aObject" , aObject)

aObject.cObject.a=3;
console.log(aObject)

const newAObject = JSON.parse(JSON.stringify(aObject));

console.log(aObject);
console.log(newAObject);
aObject.cObject.a =3;
console.log(aObject);
console.log(newAObject)