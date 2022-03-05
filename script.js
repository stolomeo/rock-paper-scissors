const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
let resultDisplay = document.getElementById("result");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll("button");
choices.forEach((choice) => {
  choice.addEventListener("click", playRound);
});

function playRound(e) {
  playerChoice = e.target.id;
  console.log(playerChoice);
  playerChoiceDisplay.innerHTML = playerChoice;
  computerPlay();
  getResult();
  displayWinner();
}
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (playerChoice == computerChoice) {
    result = "You tie";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    playerScore++;
    result = "You win! ✊ beats 🤞";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    result = "You lose! ✋ beats ✊";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerScore++;
    result = "You win! ✋ beats ✊";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    result = "You lose! 🤞 beats ✋";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    playerScore++;
    result = "You win! 🤞 beats ✋";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    result = "You lose! ✊ beats 🤞";
  }
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
  resultDisplay.innerHTML = result;
}

function displayWinner() {
  if (playerScore == 5) {
    alert("Player wins!");
    resetGame();
  } else if (computerScore == 5) {
    alert("Computer wins!");
    resetGame();
  }
}

function resetGame() {
  playerChoice = "";
  computerChoice = "";
  playerScore = 0;
  computerScore = 0;
}
