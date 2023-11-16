function getComputerChoice() {

    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random()*options.length);

    //console.log("Computer choses: " + options[choice])
    return options[choice];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "You win!";
        }
        
        if (computerSelection === "Paper") {
            return "You lose";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You win!";
        }
        
        if (computerSelection === "Scissors") {
            return "You lose";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return "You win!";
        }
        
        if (computerSelection === "Rock") {
            return "You lose";
        }
    }
}

// const playerSelection = "Rock";
// console.log("Player choses: " + playerSelection)
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));