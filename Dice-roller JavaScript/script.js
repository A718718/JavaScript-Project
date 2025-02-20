// Array of dice figures (Unicode dice symbols)
const diceFigures = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

// Function to roll a single die
function rollDie() {
    return Math.floor(Math.random() * 6); // Random index between 0 and 5
}

// Function to animate the dice roll
function animateDice(diceElement) {
    const animationInterval = setInterval(() => {
        const randomIndex = rollDie();
        diceElement.textContent = diceFigures[randomIndex];
    }, 100);

    setTimeout(() => {
        clearInterval(animationInterval);
    }, 1000); // Animation duration: 1 second
}

// Function to handle the roll button click
document.getElementById('roll-button').addEventListener('click', () => {
    const dice1Element = document.getElementById('dice1');
    const dice2Element = document.getElementById('dice2');
    const totalResultElement = document.getElementById('total-result');

    // Animate both dice
    animateDice(dice1Element);
    animateDice(dice2Element);

    // Generate final results after animation
    setTimeout(() => {
        const dice1Index = rollDie();
        const dice2Index = rollDie();

        dice1Element.textContent = diceFigures[dice1Index];
        dice2Element.textContent = diceFigures[dice2Index];

        // Calculate the total
        const total = (dice1Index + 1) + (dice2Index + 1);

        // Update the total result
        totalResultElement.textContent = `Total: ${total}`;
    }, 1000); // Wait for animation to finish
});