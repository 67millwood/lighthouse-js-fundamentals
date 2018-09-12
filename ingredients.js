var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var count = 0
while (count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}

console.log("There's the whole list!")
// Write a for loop that prints out the contents of ingredients:

for (forcount = 0; forcount < ingredients.length; forcount++) {
  console.log(ingredients[forcount]);
}

console.log("There's the list with a for loop")

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var countback = ingredients.length
while (countback >= 0) {
  console.log(ingredients[countback]);
  countback--;
}

console.log("There's the whole list backwards!")

