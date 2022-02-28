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
    duck.classList.toggle("flap");
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
    if (duck.style.left > "0px")
        duck.style.left = parseInt(duck.style.left) - 30 + "px";
}

function moveUp() {
    //  ↑
    if (duck.style.top > "0px")
        duck.style.top = parseInt(duck.style.top) - 30 + "px";
}

function moveRight() {
    // →
    if (parseInt(duck.style.left) < (window.innerWidth - duck.offsetWidth))

        duck.style.left = parseInt(duck.style.left) + 30 + "px";
}

function moveDown() {
    //  ↓
    if (parseInt(duck.style.top) < (window.innerHeight - duck.offsetHeight))
        duck.style.top = parseInt(duck.style.top) + 30 + "px";
}

window.onload = init;
console.log(duck.offsetWidth);
/* console.log(parseInt(duck.style.left, 10));
  alert(window.innerWidth);
alert(window.innerHeight); */