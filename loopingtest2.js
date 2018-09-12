
function range (start, end, step) {
  if (step < 0 || start > end || end === undefined) {
    return some_array = [];
  }
  else {

    var some_array = [];

    while (start <= end) {
      some_array.push(start);
      start = (start + step);
    }
    return (some_array);
  }
}


console.log(range(0, 10, 2));
console.log(range(2, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 30, -2));
console.log(range(50, 30, -2));
console.log(range(50, 30, -2));
console.log(range());
