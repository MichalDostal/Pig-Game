"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const dicelEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dicelEL.classList.add("hidden");

// Variable for current score
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  dicelEL.classList.remove("hidden");
  dicelEL.src = `dice-${dice}.png`;

  //3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore = currentScore + dice;
    current0EL.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
