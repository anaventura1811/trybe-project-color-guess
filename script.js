function randomColors() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors() {
  const colorBall = document.getElementsByClassName('ball');
  for (let key = 0; key < colorBall.length; key += 1) {
    colorBall[key].style.backgroundColor = randomColors();
  }
}

function answerInitialState() {
  const answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
  return answer;
}

function rgbColorGuess() {
  const rgbColor = document.getElementById('rgb-color');
  rgbColor.innerText = `${randomColors()}`;
  return rgbColor;
}
const resetGame = document.querySelector('#reset-game');
resetGame.addEventListener('click', answerInitialState);
resetGame.addEventListener('click', generateRandomColors);
resetGame.addEventListener('click', rgbColorGuess);

window.onload = function initialize() {
  generateRandomColors();
};

/* function saveMyScore() {
  localStorage.myListOfTasks = myListOfTasks.innerHTML;
}
const btnSaveMyTasks = document.getElementById('salvar-tarefas');

if (typeof Storage !== 'undefined' && localStorage.myListOfTasks) {
  myListOfTasks.innerHTML = localStorage.myListOfTasks;
}
btnSaveMyTasks.addEventListener('click', saveMyTasks); */

// score usar armazenamento no localStorage;
// usar incremento de 3 pontos para cada acerto;
// uma regra para associar o valor que aparece, com o clicado.
