function lastIndexOf (some_array, num) {
  for (var i = 0; i <= some_array.length; i++) {
    if (some_array[i] === num) {
      var counter1 = i;
    }
    else {
      var counter2 = -1;
    }
  }
  if (counter1 >= 0) {
    return (counter1);
  }
  else {
    return (counter2);
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);