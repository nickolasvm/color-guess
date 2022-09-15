// window.onload = () => {
// };
const balls = document.querySelectorAll('.ball');
const color = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function changeScore() {
  const points = parseInt(score.innerText, 10) + 3;
  score.innerText = points;
}

function startGame() {
  const correctBall = Math.floor(Math.random() * 6);
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = randomRGB();

    if (correctBall === i) {
      color.innerText = balls[i].style.backgroundColor;
    }
  }
}

function resetGame() {
  answer.innerText = 'Escolha uma cor';
  startGame();
}

function selectBall(el) {
  const ballColor = getComputedStyle(el.target).backgroundColor;
  if (ballColor === color.innerText) {
    answer.innerText = 'Acertou!';
    changeScore();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    score.innerText = 0;
  }
}

balls.forEach((el) => {
  el.addEventListener('click', selectBall);
});

reset.addEventListener('click', resetGame);

startGame();
