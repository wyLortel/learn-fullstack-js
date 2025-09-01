let a = 5e4; // 50000
let b = 5e-4;

let c = "바나나"-"사과"; 
//NaN 숫자가 아니다란 뜻 NaN도 일단 근데 타입형 찍으면
//  NUMBER가 나옴 하지만 숫자가 아님 공식적으로 숫자지만 숫자가 아님

//"124" 124 문자열 과 숫자열 숫자를 잘 구분해야한다 둘은 완전히 다른것이기 떄문
//그래서 만약 사용하고싶으면 타입을 변환 시켜주자
//parseInt 와  Number 둘중 하나 사용하면됨
let d = parseInt("123")+1;
let e = Number("123");


console.log(d,e)

//parseint  number  의 차이점 이라한다면 number은 전체가 숫자여야하고 parseint는 숫자까지만 해석

//prompt 이거 파이썬의 input인듯

//infinity는 무한을 나타냄 
let f = 2/0;

//문자열과 숫자열과 더할때는 문자열이 아닌게 문자열로 바귐 연산자를 이용할대 숫자보다 문자열이 우선시

//문자열 덧셈은 문자열로 바귀지만 +를 제외하면 숫자로 형변환됨
//즉 +는 문자열이 우선 다른 연산자는 숫자가 우선
console.log("100" + 20); 
console.log("100" - 20);
console.log("10" * 2);
console.log("30" / 3); 