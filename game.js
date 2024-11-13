// Get the button elements and score display
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const scoreDisplay = document.getElementById('score');

// Create power-up button (bonus points) and high score display
const powerUpButton = document.createElement('button');
const highScoreDisplay = document.createElement('div');
powerUpButton.textContent = "Power-Up!";
highScoreDisplay.id = 'highScore';
powerUpButton.style.display = 'none'; // Hide initially
document.body.appendChild(powerUpButton);
document.body.appendChild(highScoreDisplay);

let score = 0;
let multiplier = 10;
let powerUpActive = true;
let highScore = localStorage.getItem('highScore!') || 0;

// Update high score display
function updateHighScoreDisplay() {
    highScoreDisplay.textContent = 'High Score: ' + highScore;
}
updateHighScoreDisplay();

// Update score display
function updateScore() {
    scoreDisplay.textContent = 'Score: ' + score;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        updateHighScoreDisplay();
    }
}

// Handle click event on main button
clickButton.addEventListener('click', () => {
    score += multiplier;
    updateScore();
    if (score >= 10 && !powerUpActive) {
        showPowerUp();
    }
});

// Reset button functionality
resetButton.addEventListener('click', () => {
    score = 0;
    multiplier = 1;
    powerUpActive = false;
    powerUpButton.style.display = 'none';
    updateScore();
});

// Show power-up button
function showPowerUp() {
    powerUpActive = true;
    powerUpButton.style.display = 'block';
}

// Power-up button functionality
powerUpButton.addEventListener('click', () => {
    multiplier = 2; // Double points
    setTimeout(() => {
        multiplier = 1; // Reset multiplier after 10 seconds
        powerUpActive = true;
        powerUpButton.style.display = 'none';
    }, 10000);
});
