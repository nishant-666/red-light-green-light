document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("game-area");
  const startBtn = document.getElementById("start-btn");
  const resetBtn = document.getElementById("reset-btn");

  const dollImage = document.createElement("img");
  const playerImage = document.createElement("img");
  const finishLine = document.createElement("div");

  const gameAudio = document.createElement("audio");
  gameAudio.src = "./assets/doll.mp3";

  finishLine.style.backgroundColor = "white";
  finishLine.style.width = "700px";
  finishLine.style.height = "2px";
  finishLine.style.left = "50%";
  finishLine.style.bottom = "600px";
  finishLine.style.transform = `translate(-50%, 0)`;
  finishLine.style.position = "absolute";

  dollImage.src = "./assets/doll-front.png";

  dollImage.width = 150;

  gameArea.appendChild(finishLine);
  gameArea.appendChild(dollImage);

  let playerPosition = 10;
  let isWatching = true;

  const linePostion = 600;
  let gameOver = false;

  let interval;

  startBtn.addEventListener("click", () => {
    const forwardFace = Math.floor(Math.random() * 5) + 2;
    const backwardFace = 4000;

    startBtn.disabled = true;

    interval = setInterval(() => {
      dollImage.src = "./assets/doll-back.png";
      isWatching = false;

      setTimeout(() => {
        dollImage.src = "./assets/doll-front.png";
        gameAudio.currentTime = 0;

        gameAudio.play();
        isWatching = true;
      }, backwardFace);
    }, forwardFace * 1000);

    playerImage.src = "./assets/player.png";

    playerImage.width = 150;
    playerImage.style.bottom = `${playerPosition}px`;
    playerImage.classList.add("playerImage");

    gameArea.appendChild(playerImage);

    gameAudio.play();
  });

  document.addEventListener("keydown", (event) => {
    if (gameOver) return;

    if (event.code === "ArrowUp") {
      if (isWatching) {
        gameOver = true;
        clearInterval(interval);
        alert("Game Over!");

        startBtn.disabled = false;
      } else {
        if (playerPosition >= linePostion) {
          gameOver = true;
          clearInterval(interval);
          alert("You Win!");

          startBtn.disabled = false;
        }
        playerPosition = playerPosition + 10;
        playerImage.style.bottom = `${playerPosition}px`;
      }
    }
  });

  resetBtn.addEventListener("click", () => {
    resetGame();
  });

  function resetGame() {
    clearInterval(interval);
    gameAudio.pause();
    gameAudio.currentTime = 0;
    playerPosition = 10;
    gameOver = false;
    isWatching = true;

    if (playerImage.parentNode) {
      playerImage.remove();
    }

    dollImage.src = "./assets/doll-front.png";
    playerImage.style.bottom = `${playerPosition}px`;

    startBtn.disabled = false;
    resetBtn.disabled = true;
  }
});
