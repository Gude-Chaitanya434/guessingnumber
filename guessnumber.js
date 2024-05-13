const secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

alert("Welcome to the Number Guessing Game!\nYou have 5 attempts to guess the secret number between 1 and 100.");

while (attemptsLeft > 0) {
    let guess = parseInt(prompt("Enter your guess (between 1 and 100):"));

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;
    }

    if (guess === secretNumber) {
        alert("Congratulations! You've guessed the number!");
        break;
    } else if (guess < secretNumber) {
        alert("enter the higher number");
    } else {
        alert("enter the less number");
    }

    attemptsLeft--;
    alert("Attempts left: " + attemptsLeft);
}

if (attemptsLeft === 0) {
    alert("Game over! The correct number was " + secretNumber);
}
