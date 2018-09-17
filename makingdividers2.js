

// convert array to text with spaced division


var convertoText = function(bigarray) {
   for (i = 0; i < bigarray.length; i++) {
      var x = x + bigarray[i].join() + "\n";

}     return x;
}
  // put spacer here


console.log(convertoText([[1, 4, 6, 8], [2, 3]]));