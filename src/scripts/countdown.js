const hurryValue = 10;
var timeLeft = 60;

function countdown() {
  setInterval(function () {
    var countdown = document.querySelector("#countdown-counter");
    countdown.style.color = "#06e515";
    countdown.innerHTML = timeLeft--;

    if (timeLeft < 10) {
      countdown.style.color = "orange";
    }
    if (timeLeft < 5) {
      countdown.style.color = "red";
    }
    if (timeLeft < 0) {
      clearInterval(x);
      countdown.innerHTML = "END";
      countdown.style.color = "red";
    }
  }, 1000);
}

countdown();
