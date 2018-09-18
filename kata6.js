
var multiplicationTable = function(maxValue) {

  // create the arrays that create the table
  var array1 = [];
  var array2 = [];
  var array3 = [];
  var dash = "-"
  var space = " ";

for (a = 1; a <= maxValue; a++) {
  for (i = 1; i <= maxValue; i++) {
    array1.push(a * i);
  }
  array2.push(array1);
  array1 = [];

}

  // create the borders between the rows
  var bignum = array2[maxValue - 1][maxValue - 1];
  var big1 = (bignum.toString().length + 2);

  //  create the spacing and borders between the colums
  for (a = 0; a < maxValue; a++) {
    for (i = 0; i < maxValue; i++) {
       array1.push("+" + dash.repeat(big1));
       var spacer = (big1 - 1 - (array2[a][i].toString().length));
       array3.push("| " + array2[a][i] + space.repeat(spacer));
  }
  var borders = (array1.join("") + "+");
  console.log(borders);
  console.log(array3.join("") + "|");
  array1 = [];
  array3 = [];

} console.log(borders);



}

multiplicationTable(12);