// 돔에 서 텐스와 세컨드의  요소를 가져옴 
const appendTens = document.querySelector("#tens");
const appendSeconds = document.querySelector("#seconds");
const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");

//초 단위를 세기 위한 변수 스톱워치가 0으로 시작하니 0부터
let seconds = 0;

//초보다 더 작은 단위(보통 1/100초 = hundredths of a second)를 세는 변수
let tens = 0;

//아직 잘 모르겟으나 “타이머 핸들의 참조값을 저장해 두고, 나중에 이걸 이용해서 타이머를 멈추거나 다시 시작할 수 있다”
let interval;



//setInterval()은 자바스크립트 내장 타이머 함수
//이름 그대로 "interval(간격)"마다 특정 코드를 반복 실행해라

//이 dom의 요소를 클릭하면 이 함수를 실행해라 
buttonStart.onclick = function(){
    //10밀리초 0.01초 간격으로 이 함수를 실행
    //setInterval()을 실행하면 브라우저가 백그라운드에 타이머를 하나 만들어줌
    //타이머가 근데 여러개 잇을수도잇으니 그걸 구분하기 위해 아이디를 만들고 
    //interval변수는  타이머 id를 담고잇는것
    interval = setInterval(startTimer , 10); 
}

buttonStop.onclick = function(){
    clearInterval(interval); //clearInterval로 setInterval을 멈추어줌  멈추는거지 초기화가 아님 
}


buttonReset.onclick = function(){
    clearInterval(interval);
    seconds = 0;
    tens = 0;
    appendSeconds.innerText = 0;
    appendTens.innerText = 0;
}

//실행할 함수 
function startTimer(){
    // 초 추가
    tens++;

    //만약 밀리초가 99를 넘으면 초를 1추가 그리고 dom에 접근해 여 안의 텍스트를 seconds
    //변수와 같이 변경 그리고 밀리초는 다시 0으로 변경
    if(tens >= 99) {
        seconds++
        appendSeconds.innerText = seconds;
        tens = 0;
        appendTens.innerText = 0;

    // 아닌거는 계속 밀리초 올려주는것 
    } else {
        appendTens.innerText = tens
    }
}