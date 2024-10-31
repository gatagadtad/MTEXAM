// Declare a variable to hold the favorite number
let favNumber = 69; 

// Use a while loop and prompt() to ask the user to guess
let guess = null;

while (guess !== favNumber) {
    guess = Number(prompt("Guess my favorite number:"));
    
    if (guess < favNumber) {
        console.log("Your guess is too low.");
    } else if (guess > favNumber) {
        console.log("Your guess is too high.");
    } else if (guess === favNumber) {
        console.log("Correct! You guessed my favorite number.");
    } else {
        console.log("Invalid input. Please enter a number.");
    }
}
