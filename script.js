document.addEventListener("contextmenu", (event) => event.preventDefault());

var myTimeout;
document.addEventListener("touchstart", function () {
  myTimeout = setTimeout(function () {
    location.reload();
  }, 600);
});

document.addEventListener("touchend", function () {
  clearTimeout(myTimeout);
});

function startCountdown() {
  startCountdown = function () {};
  const startingMinutes = 3;
  let time = startingMinutes * 60;
  const countdownEl = document.getElementById("countdown");
  const myInterval = setInterval(updateCountdown, 1000);
  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (countdownEl.innerHTML == "0:00") {
      clearInterval(myInterval);
      new Audio("notification.mp3").play();
      setTimeout(function () {
        location.reload();
      }, 5000);
    }
  }
}
