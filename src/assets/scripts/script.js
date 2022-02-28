var duck = document.querySelector(".duck");
var score = 0;
var timeLeft = 12;
var hurryValue = 10;

function init() {
  duck.style.position = "absolute";
  duck.style.left = "0px";
  duck.style.top = "0px";
}
function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;
    case 39: //right arrow key
      moveRight();
      break;
    case 40: //down arrow key
      moveDown();
      break;
  }
}
function moveLeft() {
  duck.style.left = parseInt(duck.style.left) - 30 + "px";
  duck.classList.toggle("flap");
}
function moveUp() {
  duck.style.top = parseInt(duck.style.top) - 30 + "px";
  duck.classList.toggle("flap");
}
function moveRight() {
  duck.style.left = parseInt(duck.style.left) + 30 + "px";
  duck.classList.toggle("flap");
  duck.classList.toggle("right");
}
function moveDown() {
  duck.style.top = parseInt(duck.style.top) + 30 + "px";
  duck.classList.toggle("flap");
}
window.onload = init;

/*   setInterval(function () {
    duck.classList.toggle("flap");
  }, 250); */
duck.addEventListener("click", (event) => {
  score++;
  duck.innerHTML = `PTS: ` + score;
});

var x = setInterval(function () {
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
