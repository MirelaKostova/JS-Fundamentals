function equalNeighbors(input) {
  let pairsCount = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let currEl = input[i][j];

      console.log(input[i + 1][j]);
      if (currEl === input[i + 1][j]) {
        pairsCount++;
      }

      console.log(input[i][j + 1]);
      if (currEl === input[i][j + 1]) {
        pairsCount++;
      }

      //   console.log(input[i][j - 1]);
      //   if (currEl === input[i][j - 1]) {
      //     pairsCount++;
      //   }

      //   if (currEl === input[i - 1][j]) {
      //     pairsCount++;
      //   }
    }
  }

  console.log(pairsCount);
}

equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
