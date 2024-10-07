// script.js
let counter = 0;

const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Update the display
function updateCounterDisplay() {
    counterDisplay.textContent = counter;
}

// Event listeners for the buttons
increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounterDisplay();
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    updateCounterDisplay();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounterDisplay();
});
