const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const changeColor = 1000;
let intervalId = null;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart(){
    btnStart.disabled = true;
    btnStop.disabled = false;
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, changeColor)
}

function onStop(){
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(intervalId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }