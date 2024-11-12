// Get the button elements and score display
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const scoreDisplay = document.getElementById('score');

let score = 0;

// Update the score on the screen
function updateScore() {
    scoreDisplay.textContent = 'Score: ' + score;
}

// Event listener for the "Click Me!" button
clickButton.addEventListener('click', () => {
    score++;
    updateScore();
});

// Event listener for the "Reset Game" button
resetButton.addEventListener('click', () => {
    score = 0;
    updateScore();
});
