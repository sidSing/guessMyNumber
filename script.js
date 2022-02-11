'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Refracting code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage(`⛔ No number!`);

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage(`🥳 Corrent number!`);

    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = `#51cf66`;

    document.querySelector('.number').style.width = `30rem`;

    // highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess is not correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      displayMessage(guess > secretNumber ? '📈 Too high!' : `📉 Too low!`);
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage(`💥 You lost the game!`);
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  // Resetting Score
  score = 20;
  document.querySelector('.score').textContent = score;

  // Generating new secretNumber
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // Resetting Display
  displayMessage(`Start guessing...`);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  //Background Colour and width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').style.width = '15rem';
});
