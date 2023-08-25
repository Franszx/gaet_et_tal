"use strict";

const compGuess = Math.floor(Math.random() * 101);

console.log("compGuess", compGuess);

document.querySelector("button").addEventListener("click", klik);

function klik() {
  const userGuess = document.querySelector("#guess").value;

  console.log("userGuess");
  console.log("userGuess", typeof userGuess);

  const result = document.querySelector("#result");
  if (userGuess === compGuess) {
    resultText.textContent = "Tillykke, DU vandt!!";
  } else if (userGuess < compGuess) {
    resultText.textContent = "Du tabte!";
  } else {
    resultText.textContent = "Du vandt!";
  }
}
