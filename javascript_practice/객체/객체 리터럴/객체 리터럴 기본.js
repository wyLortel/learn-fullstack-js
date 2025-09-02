const name = "정우영";
const year = "1999";
const month = 11;
const date = 26;

//이건 하나의 공통점 묶음 인데 따로 따로이다 이런걸 묶고싶을때 객체 리터럴을 사용하면 좋다
const wooyoung = {
    name : "정우영",
    year : "1999",
    month : 11,
    date : 26,
}

console.log(wooyoung.name);
console.log(wooyoung.date);
console.log(wooyoung["name"]);
console.log(wooyoung["year"]);  

//속성이름 속성값으로 분리 마지막에 쉼표를 안붙여도 되지만 붙이는걸 추천 


delete wooyoung.date;

wooyoung.job = "학생"; //추가 