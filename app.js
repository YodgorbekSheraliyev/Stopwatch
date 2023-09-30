const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const mseconds = document.querySelector(".mseconds");
const resetBTN = document.querySelector(".reset");
const stopBTN = document.querySelector(".stop");
const startBTN = document.querySelector(".start");
const container = document.querySelector('.container');

let timer = false;
let minute = 0;
let second = 0;
let millisecond = 0;

const myStopWatch = function stopWatch() {
  if (timer) {
    millisecond++;

    if (millisecond == 100) {
      millisecond = 0;
      second++;
    }
    if (second > 60) {
      second = 0;
      minute++;
    }

    minutes.textContent = addZero(minute);
    seconds.textContent = addZero(second);
    mseconds.textContent = addZero(millisecond);
  }
};
startBTN.addEventListener("click", () => {
  timer = true;
  setInterval(myStopWatch, 10);
});
stopBTN.addEventListener("click", () => {
  timer = false;
  clearInterval(myStopWatch);
});
resetBTN.addEventListener("click", () => {
  timer = false;

  minute = 0;
  second = 0;
  millisecondsecond = 0;
  minutes.textContent = addZero(minute);
  seconds.textContent = addZero(second);
  mseconds.textContent = addZero(millisecondsecond);
});
function addZero(num) {
  return num < 10 ? "0" + num : num;
}

