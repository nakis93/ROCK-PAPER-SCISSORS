"use strict";

const hands = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const [a, b, c] = hands;

//A functions that when it's called it asks for the user's input
function getPlayerChoice() {
  playerSelection = prompt("Choose your weapon!").toUpperCase();
}

// Computer's random selection between the array's elements
function getComputerChoice() {
  computerSelection =
    hands[Math.floor(Math.random() * hands.length)].toUpperCase();
}

//A function for a single-round game between user and computer
function playRound() {
  getPlayerChoice();
  getComputerChoice();

  // Accept only valid inputs
  if (
    playerSelection !== a.toUpperCase() &&
    playerSelection !== b.toUpperCase() &&
    playerSelection !== c.toUpperCase()
  ) {
    alert("Invalid input! Please choose between rock, paper, scissors! ");
  }

  switch (playerSelection) {
    case "ROCK":
      if (playerSelection === computerSelection)
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection} too. It's a tie! The score is ${playerScore}vs${computerScore}`
        );
      else if (computerSelection === "PAPER") {
        computerScore = computerScore + 1;
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You lose! The score is ${playerScore}vs${computerScore}`
        );
      } else if (computerSelection === "SCISSORS") {
        playerScore = playerScore + 1;
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You WIN! The score is ${playerScore}vs${computerScore}`
        );
      }
      break;

    case "PAPER":
      if (playerSelection === computerSelection)
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection} too. It's a tie! The score is ${playerScore}vs${computerScore}`
        );
      else if (computerSelection === "SCISSORS") {
        computerScore = computerScore + 1;
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You lose! The score is ${playerScore}vs${computerScore}`
        );
      } else if (computerSelection === "ROCK") {
        playerScore = playerScore + 1;
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You WIN! The score is ${playerScore}vs${computerScore}`
        );
      }
      break;

    case "SCISSORS":
      if (playerSelection === computerSelection)
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection} too. It's a tie! The score is ${playerScore}vs${computerScore}`
        );
      else if (computerSelection === "ROCK") {
        computerScore = computerScore + 1;
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You lose! The score is ${playerScore}vs${computerScore}`
        );
      } else if (computerSelection === "PAPER") {
        playerScore = playerScore + 1;
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You WIN! The score is ${playerScore}vs${computerScore}`
        );
      }
      break;
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
game();

// Announce the winner
if (playerScore > computerScore) console.log("CONGRATULATIONS! YOU WON!");
else if (playerScore === computerScore) console.log("IT'S A TIE!");
else console.log("YOU LOST! THE COMPUTER WON!");
