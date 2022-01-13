let playerScore = 0;
let computerScore = 0;
const numberOfRounds = 5;

function playerSelection() {
    let playerChoice = prompt("Rock, paper, or scissors? ")
    return playerChoice.toLowerCase();
}
function computerPlay() {
    let compHand = Math.floor(Math.random() * 3);
    if (compHand === 0) {
        return 'rock';
    } else if (compHand === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound() {
    playerChoice = playerSelection();
    computerSelection = computerPlay();
    if (playerChoice == computerSelection) {
        return 'You tie';
    } else if (playerChoice == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'You win! Rock beats Scissors';
    } else if (playerChoice == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return 'You lose! Paper beats Rock';
    } else if (playerChoice == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win! Paper beats Rock';
    } else if (playerChoice == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return 'You lose! Scissors beats Paper';
    } else if (playerChoice == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return 'You win! Scissors beats Paper';
    } else if (playerChoice == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return 'You lose! Rock beats Scissors'
        
    }
}

function game(){
    for (let i = 0; i < numberOfRounds; i++) {
        console.log(playRound());
    }
    if (playerScore > computerScore) {
        return 'Player wins!\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore;
    } else if (playerScore < computerScore) {
        return 'Computer wins!\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore;
    } else {
        return 'Tie game!\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore;
    }

}
console.log(game());