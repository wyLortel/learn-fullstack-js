a(); // 이미 메모리상에 다 올라가 잇기에 순서를 바꾸어도 잘 실행이 됨


function a() {
    console.log("a is called");
}

// const a = function() {  이렇게 변수 안에 무명 함수를 넣는것도 가능 단 이경우도 변수가 되어버려 호이스팅이 되어도 
//     console.log(c);
//     let c = 1;
// }




console.log(b);
var b = 0;  //undefined 값이 미정의 라는 뜻 자동적으로 undefined로 초기화 해줌

// console.log(c) // 에러 메모리에는 생성되잇지만 초기화가 안되어 잇기에 에러
// let c = 0;

// console.log(d) // 에러 메모리에는 생성되잇지만 초기화가 안되어 잇기에 에러
// const d = 0;
