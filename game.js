//create secret number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//alert(guess);

//check if guess is right

if (guess === secretNumber) {
    alert("You got it right");
}

// otherwise check if higher or lower
else if (guess > secretNumber) {
    alert("Too high!");
}
else {
    alert("Too low guess!");
}
