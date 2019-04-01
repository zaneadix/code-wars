function solvePuzzle(clues) {
  let width = clues.length / 4;

  clues.forEach((clue, index) => {
    //clockwise position of clue per side;
    let offset = index % width;
    console.log(offset);

    //the clue position opposite the current clue
    let opposite =
      index >= clues.length / 2 ? index - width * 2 : index + width * 2;
    console.log(opposite);
  });

  return [[], [], [], []];
}

var clues = [2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3];

// var expected =  [[1, 3, 4, 2],
//                 [4, 2, 1, 3],
//                 [3, 4, 2, 1],
//                 [2, 1, 3, 4]];

let answer = solvePuzzle(clues);
console.log(answer[0]);
console.log(answer[1]);
console.log(answer[2]);
console.log(answer[3]);
