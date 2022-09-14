// window.onload = () => {
// };
const balls = document.querySelectorAll('.ball');
const color = document.getElementById('rgb-color');
const answer = document.getElementById('answer');

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function selectBall(el) {
  const ballColor = getComputedStyle(el.target).backgroundColor;
  if (ballColor === color.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

const correctBall = Math.floor(Math.random() * 6);

for (let i = 0; i < balls.length; i += 1) {
  balls[i].style.backgroundColor = randomRGB();
  balls[i].addEventListener('click', selectBall);
  console.log(balls[i].style.backgroundColor);
  if (correctBall === i) {
    color.innerText = balls[i].style.backgroundColor;
  }
}
