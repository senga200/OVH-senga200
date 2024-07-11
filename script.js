document.addEventListener("DOMContentLoaded", function () {
  const playingArea = document.querySelector(".playingArea");
  const scoreDisplay = document.createElement("div");
  scoreDisplay.classList.add("score");
  playingArea.appendChild(scoreDisplay);

  let score = 0;
  let maxSquares = 50;
  let currentSquares = 0;
  let timer = setInterval(createSquare, 1000);

  function createSquare() {
    if (currentSquares < maxSquares) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.left = `${Math.random() * (playingArea.clientWidth - 40)}px`;
      square.style.top = "-100px";

      square.addEventListener("click", () => {
        if (!square.classList.contains("clicked")) {
          square.classList.add("clicked");
          score++;
          scoreDisplay.textContent = `Voyons voir votre score 🧐 : ${score}`;
        }
      });

      playingArea.appendChild(square);
      currentSquares++;

      let squareInterval = setInterval(() => {
        let squareTop = square.offsetTop + 25; // speed
        square.style.top = `${squareTop}px`;

        if (square.offsetTop >= playingArea.clientHeight) {
          clearInterval(squareInterval);
          square.remove();
          currentSquares--;
        }
      }, 30); //animation fall
    }
  }
});
