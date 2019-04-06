function solvePuzzle(clues) {
  let width = clues.length / 4;
  let maxIndex = width - 1;
  let grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

  for (let index = 0; index < clues.length / 2; index++) {
    let side = Math.floor(index / width + 1);
    let position = index % width;
    let direction = side % 2;
    let opposite = index + (width * 3 - position * 2 - 1);
    let [p1, p2] = direction ? [0, position] : [position, maxIndex];
    let [o1, o2] = direction ? [maxIndex, position] : [position, 0];

    let c1 = clues[index];
    let c2 = clues[opposite];

    if (c1 === 1) {
      grid[p1][p2] = 4;
    }

    if (c2 === 1) {
      grid[o1][o2] = 4;
    }
  }

  return grid;
}

var clues = [2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3];

// var expected =  [[1, 3, 4, 2],
//                  [4, 2, 1, 3],
//                  [3, 4, 2, 1],
//                  [2, 1, 3, 4]];

let answer = solvePuzzle(clues);
console.log(answer[0]);
console.log(answer[1]);
console.log(answer[2]);
console.log(answer[3]);

/**
 *            2  2  1  3
 *            0  1  2  3
 *      3  15 __ __ 4_ __ 4 2
 *      1  14 4_ __ __ __ 5 2
 *      2  13 __ __ __ __ 6 3
 *      3  12 __ __ __ 4_ 7 1
 *            11 10 9  8
 *            3  2  2  1
 */
