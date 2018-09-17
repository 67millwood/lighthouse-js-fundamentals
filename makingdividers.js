
// convert array to text with spaced division


var convertoText = function(bigarray) {
    for (i = 0; i < bigarray.length; i++) {
      var spacer = 4;
      var x = bigarray.join(" |");
      var newline = ("|" + (x) + " |\n");
      return newline;
}
}

console.log(convertoText([1, 4, 6, 8], [1]));
