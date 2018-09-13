// loopy numbers 100 to 200


function counter(start, end) {
  for (var i = 0; i + start <= end; i++) {
    if ((i + start) % 3 === 0 && (i + start) % 4 === 0) {
      console.log("LoopyLighthouse");
    }
    else if ((i + start) % 3 === 0) {
      console.log("Loopy");
    }
    else if ((i + start) % 4 === 0) {
      console.log("Lighthouse");
    }
    else {
      console.log(i + start);
    }
  }
}

counter(100, 600);

