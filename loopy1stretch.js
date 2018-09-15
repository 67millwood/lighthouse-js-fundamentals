// loopy stretch


function loopyLighthouse(range, multiples, words) {
  var start = range[0];
  var end = range[1];

  for (var i = 0; i + start <= end; i++) {
    if ((i + start) % multiples[0] === 0 && (i + start) % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    }
    else if ((i + start) % multiples[0] === 0) {
      console.log(words[0]);
    }
    else if ((i + start) % multiples[1] === 0) {
      console.log(words[1]);
    }
    else {
      console.log(i + start);
    }
  }
}

loopyLighthouse([15, 90], [2 ,5], ["Batty", "Beacon"]);

