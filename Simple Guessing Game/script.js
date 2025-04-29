
let gameInput = 29;
let userInput = prompt("Guess any number between (1-30): ");

while (gameInput != userInput) {

    userInput = prompt("Wrong Guess. Guess again: ");
}

document.write("Congratulation, your guess is correct!");
