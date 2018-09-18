

var guess = [];
var counter = 0;
var num2 = parseInt(Math.random() * 100);


var compare = function() {
var prompt = require("prompt-sync")();
var answer = prompt("What number would you like to guess? ");
console.log("the answer is: " + num2);
// var num2 = 9;

if (num2 == answer) {
  counter++;
  console.log("Well done you.  That took " + counter + " guesses. Finished.");
}

else if (isNaN(answer)) {
  console.log("That's not a number");
  compare();
}

else {
  if (guess.includes(answer)) {
    console.log("Already guessed.  Try again.");
    compare();
  }
  else {
  console.log("not great");
  if (answer < num2) {
    console.log("Try guessing HIGHER.");
    counter++;
  }
  else {
    console.log("Try guessing LOWER.");
    counter++;
  }
    guess.push(answer);
    console.log(guess);
    compare();
  }
}
}

compare();


