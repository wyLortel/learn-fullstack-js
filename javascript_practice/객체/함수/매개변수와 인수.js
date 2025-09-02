// 매개변수와 인수 영어로 하면 파라미터와 아규먼트
//함수를 선언할때는 파라미터
//호출할때는 아규먼트

function a (parameter) {
    console.log(parameter);
}

a("argument");


function test(x, y) {
  console.log(x, y);
}
test(1); 

//매개변수와 아규먼트의 인수가 일치하지않아도 됨 그경우 짝지어지지 않은 애들은 언디파인드가 됨
//함수에서 "arguments" 를 쓸수잇는데 사용하면 아규면트들을 배열 모양으로 나타내줌
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4)); 



const muliply = (x,y,z) => {
    return x * y * z;
}