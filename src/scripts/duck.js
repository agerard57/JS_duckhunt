var duck = document.querySelector(".duck");
var score = 0;

function init() {
  duck.style.position = "absolute";
  duck.style.left = "0px";
  duck.style.top = "0px";
}

// Search for a click on the duck
duck.addEventListener("click", (event) => {
  score++;
  duck.innerHTML = `PTS: ` + score;
});

// Search for a keyboard input
function getKeyboardAndMove(e) {
  let key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //  ←
      moveLeft();
      break;
    case 38: //  ↑
      moveUp();
      break;
    case 39: // →
      moveRight();
      break;
    case 40: //  ↓
      moveDown();
      break;
  }
}

function moveLeft() {
  //  ←
  duck.style.left = parseInt(duck.style.left) - 30 + "px";
  duck.classList.toggle("flap");
}

function moveUp() {
  //  ↑
  duck.style.top = parseInt(duck.style.top) - 30 + "px";
  duck.classList.toggle("flap");
}

function moveRight() {
  // →
  duck.style.left = parseInt(duck.style.left) + 30 + "px";
  duck.classList.toggle("flap");
  duck.classList.toggle("right");
}

function moveDown() {
  //  ↓
  duck.style.top = parseInt(duck.style.top) + 30 + "px";
  duck.classList.toggle("flap");
}

window.onload = init;
