document.addEventListener("DOMContentLoaded", function () {
  const playingArea = document.querySelector(".playingArea");
  const scoreDisplay = document.createElement("div");
  scoreDisplay.classList.add("score");
  playingArea.appendChild(scoreDisplay);

  let score = 0;
  let maxSquares = 50;
  let currentSquares = 0;
  let timer = setInterval(createSquare, 1000);
  let speed = getSpeed(score);

  function createSquare() {
    if (currentSquares < maxSquares) {
      const square = document.createElement("div");
      square.classList.add("square", "anaglyph");
      square.style.left = `${Math.random() * (playingArea.clientWidth - 40)}px`;
      square.style.top = "-100px";

      square.addEventListener("click", () => {
        if (!square.classList.contains("clicked")) {
          square.classList.add("clicked");
          score++;
          updateScoreDisplay(score);
        }
      });

      playingArea.appendChild(square);
      currentSquares++;

      // offsettop : point de départ de l'élément par rapport à son parent (ici playingArea) + speed : le carré descend de XXpx à chaque intervalle (30ms)

      let squareInterval = setInterval(() => {
        let squareTop = square.offsetTop + speed; //donc le carré descend de XXpx à chaque intervalle cf return de la fonction getSpeed
        square.style.top = `${squareTop}px`;
        if (square.offsetTop >= playingArea.clientHeight) {
          clearInterval(squareInterval);
          square.remove();
          currentSquares--;
        }
      }, 30); // animation fall
    }
  }

  function updateScoreDisplay(score) {
    if (score < 10) {
      scoreDisplay.textContent = `Voyons voir votre score 🧐 : ${score}`;
    } else if (score < 20) {
      scoreDisplay.textContent = `Bon début. Accélerons la cadence : ${score}`;
    } else if (score < 30) {
      scoreDisplay.textContent = `Pas Mal ! Un peu plus vite : ${score}`;
    } else if (score < 40) {
      scoreDisplay.textContent = `Jolie série de clics ! : ${score}`;
    } else {
      scoreDisplay.textContent = `Whaouuu !! 😲: ${score}`;
    }
  }

  function getSpeed(score) {
    if (score < 10) {
      return 15;
      // speed = 15px
    } else if (score < 20) {
      return 25;
    } else if (score < 30) {
      return 50;
    } else if (score < 40) {
      return 70;
    } else {
      return 100;
    }
  }
});
