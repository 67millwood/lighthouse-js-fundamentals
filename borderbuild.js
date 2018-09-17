


var builder = function(num) {
  var dashes = "-";
  var border = "+" + dashes.repeat(num) + "+";
  return border;
}

console.log(builder(4));
