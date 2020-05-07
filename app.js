//CLOCK SECTION

const currentTime = document.querySelector("#current-time");

let currentTimeIntervalID = setInterval(function () {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
    hours = hours.slice(-2);
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
    minutes = minutes.slice(-2);
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
    seconds = seconds.slice(-2);
  }

  currentTime.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);

//STOPWATCH SECTION

let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

let secondsCounter = 0;
let minutesCounter = 0;
let hoursCounter = 0;

const stopwatch = document.querySelector("#stopwatch");
const stopwatchButton = document.querySelector("#stopwatch-button");

stopwatch.innerText = "00:00:00";
let intervalID;

stopwatchButton.addEventListener("click", function (event) {
  let renderedTime = stopwatch.innerText;

  if (stopwatch.innerText === "00:00:00") {
    stopwatchButton.innerText = "stop";
    intervalID = setInterval(function () {
      timerSeconds = parseInt(timerSeconds, 10);
      timerMinutes = parseInt(timerMinutes, 10);
      timerHours = parseInt(timerHours, 10);
      timerSeconds += 1;
      secondsCounter += 1;

      if (secondsCounter > 59) {
        timerMinutes += 1;
        minutesCounter += 1;
        timerSeconds = 0;
        secondsCounter = 0;
      }

      if (minutesCounter > 59) {
        timerHours += 1;
        hoursCounter += 1;
        minutesCounter = 0;
      }

      if (hoursCounter > 23) {
        timerHours = 0;
      }

      //TIMER VISUALS IF STATEMENT

      if (timerHours < 10) {
        timerHours = `0${timerHours}`;
        timerHours = timerHours.slice(-2);
      }
      if (timerMinutes < 10) {
        timerMinutes = `0${timerMinutes}`;
        timerMinutes = timerMinutes.slice(-2);
      }
      if (timerSeconds < 10) {
        timerSeconds = `0${timerSeconds}`;
        timerSeconds = timerSeconds.slice(-2);
      }

      stopwatch.innerText = `${timerHours}:${timerMinutes}:${timerSeconds}`;
    }, 1000);
  } else {
    clearInterval(intervalID);
  }
});

// COUNTDOWN SECTION

let countdownSeconds = 0;
const countdown = document.querySelector("#countdown");
const input = document.querySelector("#seconds-input");
const countdownButton = document.querySelector("#countdown-button");

countdown.innerText = `${countdownSeconds} seconds left`;

countdownButton.addEventListener("click", function () {
  let inputValue = parseInt(input.value, 10);
  if (isNaN(inputValue)) {
    window.alert("Please enter a valid number.");
    return inputValue;
  }
  console.log("inputValue:", inputValue);
  countdownSeconds = inputValue;
  console.log(countdownSeconds);

  let otherIntervalID = setInterval(function () {
    countdownSeconds--;
    countdown.innerText = `${countdownSeconds} seconds left`;
    if (countdownSeconds < 1) {
      countdownSeconds = 0;
      clearInterval(otherIntervalID);
      let sound = document.createElement("audio");
      sound.setAttribute("src", "chime.mp3");
      sound.setAttribute("preload", "auto");
      sound.setAttribute("controls", "none");
      sound.style.display = "none";
      document.body.appendChild(sound);
      sound.play();
    }
  }, 1000);
});
