var duck = document.querySelector(".duck");
var score = 0;
var duckShotSfx = new Audio("/src/assets/sfx/duck_shot.wav");
var gunShotSfx = new Audio("/src/assets/sfx/gun_shot.wav");

function init() {
    duck.style.position = "absolute";
    duck.style.left = "0px";
    duck.style.top = "0px";
    duck.innerHTML = `PTS: ` + score;

}

// Search for a click on the duck
document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('duck')) {
        gunShotSfx.play();
        gunShotSfx.currentTime = 0; // Reset sfx if already playing
        score === 0 ? score : score--; // This prevents the score from decreasing past 0
        duck.innerHTML = `PTS: ` + score;
    } else {
        score++;
        duck.innerHTML = `PTS: ` + score;
        duckShotSfx.play();
        duckShotSfx.currentTime = 0;
    }

});
/* duck.addEventListener("click", (event) => {
 // Reset sfx if already playing
}); */

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