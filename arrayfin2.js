
var repeatNumbers = function first(num) {

  var array = [];
  var bigarray = [];

  for (a = 0; a < num.length; a++) {
    for (i = 0; i < num[a][1]; i++) {
      array.push(num[a][0]);
  }
      bigarray.push(array);
      array = [];
  }
      return bigarray.join("").toString();
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));