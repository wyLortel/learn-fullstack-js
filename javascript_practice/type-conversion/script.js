let val;

val =String(111);
val =String(8 + 4);
val = String(false);
val = String([1,2,3,4,5])
val = (5).toString();



val - Number("1");
val - Number(true);
val - Number(false);
 
val - Number([1,2,3]);

val = parseInt("111.40"); //소숫점 부분 없애줌
val = parseFloat("111.40"); //소숫점 부분 없애줌

console.log(val);
console.log(typeof val);


const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);


const user = {
    name : "wooyoung",
    province: "경기도",
    city: "성남시"
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

let i = 0;

do {
    console.log("number" + i);
    i++;
}

while(i <10);


const location = ["서울", "대구", "부산","경기도"];



location.map(function(location){
    console.log(location)
});