var array = [[0, 0, 0, 5, 0], [0, 0]];

var second = [1, 2];

array.splice(second[1], 1, 1);

console.log(array);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");

console.log(fruits);

console.log(array.includes([0, 0]));


