"use strict";

const hands = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;

function getPlayerChoice() {
  playerSelection = prompt("Choose your weapon!");
  return playerSelection.toUpperCase();
}
getPlayerChoice();

function getComputerChoice() {
  computerSelection = hands[Math.floor(Math.random() * hands.length)];
  return computerSelection.toUpperCase();
}
getComputerChoice();

function playRound() {
  switch (playerSelection) {
    case "rock":
      if (playerSelection === computerSelection)
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection} too. It's a tie!`
        );
      else if (computerSelection === "paper")
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You lose!`
        );
      else if (computerSelection === "scissors")
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You WIN!`
        );

      break;

    case "paper":
      if (playerSelection === computerSelection)
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection} too. It's a tie!`
        );
      else if (computerSelection === "scissors")
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You lose!`
        );
      else if (computerSelection === "rock")
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You WIN!`
        );

      break;

    case "scissors":
      if (playerSelection === computerSelection)
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection} too. It's a tie!`
        );
      else if (computerSelection === "rock")
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You lose!`
        );
      else if (computerSelection === "paper")
        console.log(
          `You got ${playerSelection} and the computer got ${computerSelection}. You WIN!`
        );

      break;
  }
}
playRound();
