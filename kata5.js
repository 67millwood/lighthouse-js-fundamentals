

var camelCase = function(input) {
  var splitter = input.split(" ");

  for (i = 1; i < splitter.length; i++) {
    splitter[i] = splitter[i].charAt(0).toUpperCase() + splitter[i].slice(1);

  }
  return splitter.join("");
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

