/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guess
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game value
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('.#guess-btn'),
  guessInpact = document.querySelector('.#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContect = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  } else {
  }
});

// Set message
function setMessage(msg) {
  message.style.color = 'red';
  message.textContent = msg;
}
