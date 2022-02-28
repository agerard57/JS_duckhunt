const hurryValue = 10;
var timeLeft = 60;

const countdown = setInterval(function() {
    let counter = document.querySelector("#countdown-counter");
    counter.style.color = "#06e515";
    counter.innerHTML = timeLeft--;

    if (timeLeft < 10) {
        counter.style.color = "orange";
    }
    if (timeLeft < 5) {
        counter.style.color = "red";
    }
    if (timeLeft < 0) {
        clearInterval(countdown);
        counter.innerHTML = "END";
        counter.style.color = "red";
        window.alert("Time expired!");
    }
}, 1000);