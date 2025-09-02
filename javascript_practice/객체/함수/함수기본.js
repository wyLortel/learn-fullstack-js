//우리가 하고싶은 동작을 이미 만들어놓고 쓰고싶을때마다 쓰는게 함수

//두가지 방법으로 만들수잇음
// function a(){}; 이건 옛날방법
// const c = () => {}; 이게 요즘 화살표 함수는 반드시 변수 대입  화살표함수라고 불림
//함수선언문 뒤에는 ; 안붙임 if for while 뒤에 안붙임


function a() {
    console.log("Hello");
     console.log("Funtion");
}

a();
a();
a();
//반복을 줄여줌 

//이름을 안붙여준 익명함수란게 잇는데 이건 딱 한번만 쓸때 사용


// 함수는 반환값을 가지고잇음
// return으로 반환값을 받음

function b() {
    return "반환값" // 대신 return은 함수를 종료하면서 반환시킴
}

console.log(b());

function c() {
    return[1,5] //값을 여러개 리턴받고싶으면 배열로 리턴값은 하나여야만 한다
}
