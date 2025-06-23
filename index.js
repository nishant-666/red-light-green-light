document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("game-area");
  const startBtn = document.getElementById("start-btn");

  const dollImage = document.createElement("img");
  const playerImage = document.createElement("img");
  const finishLine = document.createElement("div");

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

  startBtn.addEventListener("click", () => {
    const gameAudio = document.createElement("audio");

    const forwardFace = Math.floor(Math.random() * 5) + 2;
    const backwardFace = 4000;

    setTimeout(() => {
      dollImage.src = "./assets/doll-back.png";
      isWatching = false;

      setTimeout(() => {
        dollImage.src = "./assets/doll-front.png";
        isWatching = true;
      }, backwardFace);
    }, forwardFace * 1000);

    console.log(forwardFace);

    gameAudio.src = "./assets/doll.mp3";

    playerImage.src = "./assets/player.png";

    playerImage.width = 150;
    playerImage.style.bottom = `${playerPosition}px`;
    playerImage.classList.add("playerImage");

    gameArea.appendChild(playerImage);

    gameAudio.play();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
      if (isWatching) {
        alert("Game Over!");
      } else {
        playerPosition = playerPosition + 10;
        playerImage.style.bottom = `${playerPosition}px`;
      }
    }
  });
});
