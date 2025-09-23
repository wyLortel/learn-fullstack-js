const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");

const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

let seconds = 0;
let tens = 0;
let interval;

function pad(n) {
  return n.toString().padStart(2, "0");
}

function startTimer() {
  tens++;

  if (tens > 99) {
    seconds++;
    tens = 0;
  }

  appendSeconds.innerText = pad(seconds);
  appendTens.innerText = pad(tens);
}

buttonStart.onclick = function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  seconds = 0;
  tens = 0;
  appendSeconds.innerText = "00";
  appendTens.innerText = "00";
};
