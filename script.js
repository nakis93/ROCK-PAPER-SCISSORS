"use strict";

const hands = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const [a, b, c] = hands;

const btn1 = document.querySelector("#btnRock");
const btn2 = document.querySelector("#btnPaper");
const btn3 = document.querySelector("#btnScissors");
const btn4 = document.querySelector("#new-game");

function button1() {
  playerSelection = a.toUpperCase();
  playRound();
  scores.textContent = `${playerScore} vs ${computerScore}`;
  announceWinner();
}

function button2() {
  playerSelection = b.toUpperCase();
  playRound();
  scores.textContent = `${playerScore} vs ${computerScore}`;
  announceWinner();
}

function button3() {
  playerSelection = c.toUpperCase();
  playRound();
  scores.textContent = `${playerScore} vs ${computerScore}`;
  announceWinner();
}

function playGame() {
  btn1.addEventListener("click", button1);

  btn2.addEventListener("click", button2);

  btn3.addEventListener("click", button3);

  btn4.addEventListener("click", () => {
    newGame();
  });
}
playGame();

// Computer's random selection between the array's elements
function getComputerChoice() {
  computerSelection =
    hands[Math.floor(Math.random() * hands.length)].toUpperCase();
  selection.textContent = `Evil Computer chose ${computerSelection}!`;
}

//A function for a single-round game between user and computer
function playRound() {
  getComputerChoice();

  switch (playerSelection) {
    case "ROCK":
      if (playerSelection === computerSelection);
      else if (computerSelection === "PAPER") {
        computerScore = computerScore + 1;
      } else if (computerSelection === "SCISSORS") {
        playerScore = playerScore + 1;
      }
      break;

    case "PAPER":
      if (playerSelection === computerSelection);
      else if (computerSelection === "SCISSORS") {
        computerScore = computerScore + 1;
      } else if (computerSelection === "ROCK") {
        playerScore = playerScore + 1;
      }
      break;

    case "SCISSORS":
      if (playerSelection === computerSelection);
      else if (computerSelection === "ROCK") {
        computerScore = computerScore + 1;
        // );
      } else if (computerSelection === "PAPER") {
        playerScore = playerScore + 1;
      }
      break;
  }
}

// Announce the winner
function announceWinner() {
  if (playerScore === 5) {
    winner.textContent =
      "HURRAY! Your Rock-Paper-Scissors skills are out of this planet!";
    endGame();
  } else if (computerScore === 5) {
    winner.textContent =
      "Oh no, it seems like a bunch of zeros and ones humbled you..";
    endGame();
  }
}
// Deactivate the R-P-S buttons once the winner is announced
function endGame() {
  btn1.removeEventListener("click", button1);
  btn2.removeEventListener("click", button2);
  btn3.removeEventListener("click", button3);
}

function newGame() {
  playerScore = 0;
  computerScore = 0;
  winner.textContent = "";
  scores.textContent = "";
  playGame();
}
