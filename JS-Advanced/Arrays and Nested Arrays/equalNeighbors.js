function equalNeighbors(input) {
  let pairsCount = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let currEl = input[i][j];

      let nextIndex = i + 1;
      if (nextIndex < input.length) {
        if (currEl === input[nextIndex][j]) {
          pairsCount++;
        }
      }

      let nextIndexRow = j + 1;
      if (nextIndexRow < input[i].length) {
        if (currEl === input[i][nextIndexRow]) {
          pairsCount++;
        }
      }
    }
  }

  //   console.log(pairsCount);
  return pairsCount;
}

equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

console.log("------------------------");
equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
