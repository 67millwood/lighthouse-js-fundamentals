



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
var longcolumns = length % (columns + 1)
//console.log(longcolumns);

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
/*
//create the sentence BEFORE flipping the array
    console.log(bigarray);

   for (i = 0; i < bigarray.length; i++) {
      array.push(bigarray[i].join(""));
    }
    console.log(array);
    console.log(array.join(" "));
*/
//flip the array
    var finalarray = [];
    var finalarray2 = [];
    for (i = 0; i <= columns; i++) {
      for (b = 0; b < bigarray.length; b++) {
          finalarray.push(bigarray[b][i]);
        }
          finalarray2.push(finalarray);
          finalarray = [];

      }
//create the last sentence
//    console.log(finalarray2);
      array = [];
    for (i = 0; i < finalarray2.length; i++) {
          array.push(finalarray2[i].join(""));
        }
//      console.log(array);
        console.log(array.join(" "));

  }



square();

