function equalNeighbors(input) {
  let pairsCount = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let currEl = input[i][j];

      if (i >= 0) {
        console.log(input[i + 1][j]);
        if (currEl === input[i + 1][j]) {
          pairsCount++;
        }
      }

      if (j >= 0) {
        console.log(input[i][j + 1]);
        if (currEl === input[i][j + 1]) {
          pairsCount++;
        }
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

// function equalNeighbors(matrix) {
//   let counter = 0;

//   for (let r = 0; r < matrix.length; r++) {
//     for (let c = 0; c < matrix[r].length; c++) {
//       if (c !== matrix[r].length - 1) {
//         if (matrix[r][c] === matrix[r][c + 1]) {
//           counter++;
//         }
//       }

//       if (r !== matrix.length - 1) {
//         if (matrix[r][c] === matrix[r + 1][c]) {
//           counter++;
//         }
//       }
//     }
//   }

//   return counter;
// }

// equalNeighbors([
//   ["2", "3", "4", "7", "0"],
//   ["4", "0", "5", "3", "4"],
//   ["2", "3", "5", "4", "2"],
//   ["9", "8", "7", "5", "4"],
// ]);

equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
