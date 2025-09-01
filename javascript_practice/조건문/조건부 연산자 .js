// # 조건식이 ? 참일때 실행되는 식 : 거짓일때 실행되는 식
//조건부는  반드시 결과값이 나옴 

let value = 5 < 0 ? "참입니다" : "거짓입니다"; //참이면 앞에부분 거짓이면 뒷부분 실행


let cond = true;
let value1 = cond ? "참" : "거짓";

let cond1 = true;
let value2 = "";
switch (cond) {
    case true:
        value = "참";
        break;
    case false:
        value = "거짓"
        break;
}

// 아주 간단한 부분만 조건부 연산자로 바꾸자 안그러면 복잡해져서 독이 된다 