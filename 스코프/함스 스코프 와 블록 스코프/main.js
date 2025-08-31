function a() {
    let b = 0;
    console.log(b);
}

// console.log(b); // 오류 스코프 초과
a();

{
    let c = 1
    console.log(c);
}


{
    var d = 1
}

console.log(d);


//{} 이 괄호의 범위를 블록 스코프라고 한다
//함수도 {}로 감지만 함수는 함수 스코프라고 한다
//블록 스코프는 let 과 const를 블럭안에서 생성해야 블록 스코프가 생성된다
//var을 사용하면 블록 스코프 무시 함수 또한 블록 스코프 무시