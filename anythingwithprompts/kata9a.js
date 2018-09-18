



var square = function() {

//create the number of columns and get input from user
var bigarray = [];
var array = [];
var loopcount = 0;
var prompt = require("prompt-sync")();
var sentence = prompt("What sentence would you like coded? ");
console.log("the sentence is: " + sentence);
var length = sentence.length;
console.log(length);
var columns = Math.round(Math.sqrt(length));
console.log(columns);
var spacer = (columns + 1);
var longerstrings = length % spacer;
console.log(spacer + "," + longerstrings);

// create the big array
for (i = 0; i < (sentence.length - loopcount); i++) {
  for (a = 0; a <= columns; a++) {
    if ((a + i + loopcount) < sentence.length) {
    array.push(sentence.charAt(a + i + loopcount));
    }
    else {

    }
  }
    bigarray.push(array);
    loopcount = loopcount + columns;
    array = [];

}
//create the code words and display them
   console.log(bigarray);
   console.log(bigarray[0][0]);
   var finalarray = [];
  for (i = 0; i <= columns; i++) {
    for (a = 0; a < bigarray.length; a++) {
     finalarray.push(bigarray[a][i]);
    }
  } console.log(finalarray);

    console.log(finalarray.join(""));

}

square();

