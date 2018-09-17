

var createMain = function(maxValue) {

  var firstarray = [];
  var secondarray = [];
      for (a = 1; a <= maxValue; a++) {
        for (i = 1; i <=maxValue; i++) {
          firstarray.push(i * a);
      }
        secondarray.push(firstarray);
        firstarray = [];
    }
    createBorders(secondarray);
}

var createBorders = function(input) {
    for(c = 0; c < input.length; c++) {
      for (d = 0; d < input[c].length; d++) {
        var next = d + 1;
        if (input[c][d].length < input[c][next].length) {
          var largestValue = input[c][next];
        }
        else {
          largestValue = input[c][d];
        }
      }
    }   console.log(largestValue);

}

var converttoString = function(secondarray) {

    for (b = 0; b < secondarray.length; b++) {
      var x = secondarray[b].toString();
      var border = "| ";
      x = x.split(',').join(border);
      var y = (y + "\n" + x);
    }
      console.log(y);

}

createMain(5);
// multiplicationTable(12);

