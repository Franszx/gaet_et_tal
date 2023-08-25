Math.random();
const randomNumber = Math.floor(Math.random() * 101);

const guessInput = document.getElementById("Input");

const guessButton = document.getElementById("Button");

const feedback = document.getElementById("feedback");

const celebration = document.getElementById("celebration");

guessButton.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);

  if (userGuess === randomNumber) {
    feedback.textContent = "Klasse! Du gættede rigtigt!";
    celebration.style.display = "block"; // Display celebration animation
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Forkert! for lavt.";
  } else {
    feedback.textContent = "Forkert! for højt.";
  }
});

guessInput.addEventListener("input", () => {
  feedback.textContent = "";
  celebration.style.display = "none";
});
