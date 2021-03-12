function randomColors() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors() {
  const colorBall = document.getElementsByClassName('ball');
  for (let key = 0; key < colorBall.length; key += 1) {
    colorBall[key].style.backgroundColor = randomColors();
  }
}
const resetGame = document.querySelector('#reset-game');
resetGame.addEventListener('click', generateRandomColors);

window.onload = function initialize() {
  generateRandomColors();
};

// score usar armazenamento no localStorage;
