document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("game-area");
  const startBtn = document.getElementById("start-btn");

  const dollImage = document.createElement("img");
  const playerImage = document.createElement("img");

  dollImage.src = "./assets/doll-front.png";

  dollImage.width = 150;

  gameArea.appendChild(dollImage);

  let playerPosition = 10;

  startBtn.addEventListener("click", () => {
    const gameAudio = document.createElement("audio");

    const forwardFace = Math.floor(Math.random() * 5) + 2;
    const backwardFace = 4000;

    setTimeout(() => {
      dollImage.src = "./assets/doll-back.png";

      setTimeout(() => {
        dollImage.src = "./assets/doll-front.png";
      }, backwardFace);
    }, forwardFace * 1000);

    console.log(forwardFace);

    gameAudio.src = "./assets/doll.mp3";

    playerImage.src = "./assets/player.png";

    playerImage.width = 150;
    playerImage.style.bottom = `${playerPosition}px`;
    playerImage.classList.add("playerImage");

    gameArea.appendChild(playerImage);

    // gameAudio.play();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
      playerPosition = playerPosition + 10;
      playerImage.style.bottom = `${playerPosition}px`;
    }
  });
});
