


var x = 4;
var newarray = [];

function arrayMultiplier(array) {
for (i = 0; i < array.length; i++) {
  var num = array[i] * x;
  newarray.push(num);
  var num = 0;
}
  return newarray;
}

console.log(arrayMultiplier([1, 2, 3, 4, 5]));

