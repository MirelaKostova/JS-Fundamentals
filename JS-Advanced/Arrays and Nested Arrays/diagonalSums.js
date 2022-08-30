function diagonalSums(input) {
  let indexL = 0;
  let indexR = input.length - 1;

  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (const el of input) {
    firstDiagonal += el[indexL++];
    secondDiagonal += el[indexR--];
  }

  console.log(firstDiagonal, secondDiagonal);
}

diagonalSums([
  [20, 40],
  [10, 60],
]);

diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
