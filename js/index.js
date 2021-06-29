const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const bodyRef = document.querySelector("body");
const btnStartRef = document.querySelector('button[data-action="start"]');
const btnStopRef = document.querySelector('button[data-action="stop"]');
let timerId = null;
const DELAY_TIMER = 1000;

btnStartRef.addEventListener("click", updateColor);
btnStopRef.addEventListener("click", stopTimer);

function chngColor() {
  bodyRef.classList.add("body-color");
  bodyRef.style.backgroundColor = createRandColor();
}
function updateColor() {
  stopTimer();
  timerId = setTimeout(() => {
    updateColor();
    chngColor();
    console.log(setTimeout);
  }, DELAY_TIMER);
}
// console.log(setTimeout);
function stopTimer() {
  clearTimeout(timerId);
  timerId = null;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function createRandColor() {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  return colors[colorIndex];
}
