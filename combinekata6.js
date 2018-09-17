
// main function

var multiplicationTable = function(maxValue) {

}

// create the main array
var mainArray = function(maxValue) {

  var firstarray = [];
  var secondarray = [];
      for (a = 1; a <= maxValue; a++) {
        for (i = 1; i <=maxValue; i++) {
          firstarray.push(i * a);
      }
        secondarray.push(firstarray);
        firstarray = [];
    }   return secondarray;
  }

// mainArray(5);

// multiplicationTable(12);
// convert array to text


// length calculation
var biggestNum = function(array) {
      var lastarray = array[array.length - 1];
      var lastnum = lastarray[lastarray.length - 1];
      var bordersize = lastnum.toString().length;
      return bordersize;
    }

console.log(biggestNum(mainArray(12)));

// make the border
var builder = function(num) {
  var dashes = "-";
  var border = "+" + dashes.repeat(num + 2) + "+";
  return border;
}

console.log(builder(biggestNum(mainArray(12))));


