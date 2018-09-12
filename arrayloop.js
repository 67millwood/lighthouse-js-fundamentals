

var array = [];
var count = 0;
var limit = 10;
var adder = 2

function happytime (start, inc, end) {
while (start <= end) {
  array.push(start);
  start = (start + inc);
}
  return array;
 // return array = [];
}


console.log(happytime(0, 2, 7));

console.log(happytime(5, 10, 60));
