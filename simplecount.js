
var array1 = []

function createarray (num) {
  while (num <= 10) {
    array1.push(num);
    num++;
  }
  console.log(array1);
}

console.log(createarray(6));