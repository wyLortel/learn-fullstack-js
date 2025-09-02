//객체는 모양이 같아도 서로 비교하면 false가 나옴 {} === {}



//트루
"str" === "str"
123 == 123


const a =  { name: "정우영"};
const array = [1,2,a];

// {} === {}; // false
// [] === []; // false

//객체는 변수에 주소가 나머지는 값이 

const wooyoung = {
    name: {
        first : "정",
        last: "우영",
    },
    gender: "m",
};


wooyoung.name.first = "김";