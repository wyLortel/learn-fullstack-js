const appendTens = document.querySelector("#tens");
const appendSeconds = document.querySelector("#seconds");
const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");

let second = 0;
let tens = 0;
let interval;

buttonStart.onclick = function() {
    interval = setInterval(startTimer , 10);
}

buttonStop.onclick = function(){
    clearInterval(interval);
}

buttonReset.onclick = function(){
    tens = 0;
    second = 0;

    appendSeconds.innerText = tens;
    appendTens.innerText = second;
}


function startTimer() {
    tens++;

    if (tens > 99) {
        second++;
        tens = 0;
        appendSeconds.innerText = second;
    } else {
        appendTens.innerText = tens;
    }
}