
var sum = 0;

var conditionalSum = function(values, condition) {
    if (condition === "even") {
      for (i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
        sum = (sum + values[i])
      }

    }
    else {

    }
  }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));