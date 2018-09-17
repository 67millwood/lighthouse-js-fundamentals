

var biggestNum = function(array) {
      var lastarray = array[array.length - 1];
      var lastnum = lastarray[lastarray.length - 1];
      return lastnum.toString().length;
    }

console.log(biggestNum([[1, 4, 6, 1000], [4, 6, 45, 101018]]));

