
  // var whiteQueen = [0, 5];
  // var blackQueen = [5, 0];

var generateboard = function(whiteQueen, blackQueen) {

  //make the 8 by 8 board
  var board = [];
  var board2 = [];
  var boardsize = 8;

  for (a = 0; a < boardsize; a++) {
    for (i = 0; i < boardsize; i++) {
      board.push(0);
    }
      if (a == whiteQueen[0]) {
        board.splice(whiteQueen[1], 1, 1);
      }
      else {

      }
      if (a == blackQueen[0]) {
        board.splice(blackQueen[1], 1, 1);
      }
      else {

      }
      board2.push(board);
      board = [];

}     console.log(board2);
// figure out threat
    // generate diagonal array
    var diagonal = [];
    for (i = 1; i < boardsize; i++) {
      var leftup = [(whiteQueen[0] - i), (whiteQueen[1] - i)];
      diagonal.push(leftup);
      var rightup = [(whiteQueen[0] - i), (whiteQueen[1] + i)];
      diagonal.push(rightup);
      var leftdown = [(whiteQueen[0] + i), (whiteQueen[1] - i)];
      diagonal.push(leftdown);
      var rightdown = [(whiteQueen[0] + i), (whiteQueen[1] + i)];
      diagonal.push(rightdown);
    }
    // check for diagonal HIT
    for (i = 0; i < diagonal.length; i++) {
      if (diagonal[i][0] == blackQueen[0]) {
       for (a = 0; a < boardsize; a++) {
         if (diagonal[i][a] == blackQueen[1]) {
            var dHit = 1;
         }
         else {

          }
       }
      }
      else {

        }
    }

    // same row
    if (whiteQueen[0] == blackQueen[0]) {
      console.log("THREAT via row, Boom");
    }
    // same column
    else if (whiteQueen[1] == blackQueen[1]) {
      console.log("THREAT via column, Boom");
    }
    else if (dHit === 1) {
      console.log("THREAT via diagonal, Boom");
    }
    else {
      console.log("Not a Threat. Unboom!");
    }
}

generateboard([0, 7], [5, 3]);  //not a threat
generateboard([0, 0], [3, 0]);  //same column threat
generateboard([0, 0], [1, 3]);  //not a threat
generateboard([1, 2], [6, 7]);  //diagonal threat



