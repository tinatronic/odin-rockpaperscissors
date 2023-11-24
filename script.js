// DOM elements
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const results = document.getElementById('results');

function getComputerChoice() {

    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random()*options.length);

    return options[choice];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        results.innerHTML = "It's a tie!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            results.innerHTML = "You win!"
        }
        
        if (computerSelection === "Paper") {
            results.innerHTML = "You lose..."
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            results.innerHTML = "You win!";
        }
        
        if (computerSelection === "Scissors") {
            results.innerHTML = "You lose...";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            results.innerHTML = "You win!";
        }
        
        if (computerSelection === "Rock") {
            results.innerHTML = "You lose...";
        }
    }
}

rockBtn.addEventListener('click', () => { 
    const computerSelection = getComputerChoice();
    playRound('Rock', computerSelection);
});

paperBtn.addEventListener('click', () => { 
    const computerSelection = getComputerChoice();
    playRound('Paper', computerSelection);
});

scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('Scissors', computerSelection);
});