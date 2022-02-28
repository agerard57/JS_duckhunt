var bgmButton = document.querySelector(".bgm-button");
var isMusicMuted = true;
var bgmMusic = new Audio("/src/assets/sfx/bgm.mp3");

bgmButton.addEventListener("click", (event) => {
    if (isMusicMuted) {
        bgmButton.classList.toggle("unmute");
        bgmMusic.play();
        isMusicMuted = false;
    } else {
        bgmButton.classList.toggle("unmute");
        bgmMusic.currentTime = 0;
        bgmMusic.pause();
        isMusicMuted = true;
    }
});