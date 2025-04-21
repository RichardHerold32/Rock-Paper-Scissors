// index.js

const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "Tie";
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player";
  }
  return "Computer";
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);

  let resultText;
  if (winner === "Tie") {
    resultText = `It's a tie! You both chose ${playerSelection}`;
  } else if (winner === "Player") {
    playerScore++;
    resultText = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    resultText = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  resultDiv.textContent = resultText;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  }
}

function declareWinner() {
  if (playerScore > computerScore) {
    winnerDiv.textContent = "🎉 You won the game!";
  } else {
    winnerDiv.textContent = "😢 You lost the game!";
  }


  buttons.forEach(btn => btn.disabled = true);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.getAttribute("data-choice");
    playRound(playerChoice);
  });
});
