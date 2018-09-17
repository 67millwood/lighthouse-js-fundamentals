

var multiplicationTable = function(maxValue) {

  var firstarray = [];
  var secondarray = [];
      for (a = 1; a <= maxValue; a++) {
        for (i = 1; i <=maxValue; i++) {
          firstarray.push(i * a);
      }
        secondarray.push(firstarray);
        firstarray = [];
    }



 //   convert array to text
    for (b = 0; b < secondarray.length; b++) {
      var x = secondarray[b].toString();
      var border = "| ";
      x = x.split(',').join(border);
      var y = (y + "\n" + x);
    }
      return (y);

}

console.log(multiplicationTable(5));
// multiplicationTable(12);

