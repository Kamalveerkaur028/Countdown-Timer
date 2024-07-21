let countdown;
let timerDisplay = document.getElementById('time');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let totalTime = 3600; 

function displayTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const display = `${hours < 10 ? '0' : ''}${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  timerDisplay.textContent = display;
}

function startTimer() {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + totalTime * 1000;
  displayTime(totalTime);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTime(secondsLeft);
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
}

function resetTimer() {
  clearInterval(countdown);
  totalTime = 3600;
  displayTime(totalTime);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

displayTime(totalTime);
