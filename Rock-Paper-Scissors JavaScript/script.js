// Function to get the computer's choice with emojis
function getComputerChoice() {
    const choices = ['🪨', '📄', '✂️'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === '🪨' && computerChoice === '✂️') ||
        (playerChoice === '📄' && computerChoice === '🪨') ||
        (playerChoice === '✂️' && computerChoice === '📄')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// Function to play the game
function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;

    

}