'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number!`;

    // Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🥳 Corrent number!`;

    document.querySelector('body').style.backgroundColor = `#51cf66`;

    document.querySelector('.number').style.width = `30rem`;

    // Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = '📈 Too high!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `💥 You lost the game!`;
    }

    //Guess is too low
  } else {
    if (score > 1) {
      document.querySelector('.score').textContent = --score;
      document.querySelector('.message').textContent = '📉 Too low!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `💥 You lost the game!`;
    }
  }
});
