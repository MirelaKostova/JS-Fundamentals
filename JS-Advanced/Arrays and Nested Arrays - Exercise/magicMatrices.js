function magicMatrices(matrix) {
  let isMagical = true;

  for (let i = 0; i < matrix.length - 1; i++) {
    let currRowSum = matrix[i].reduce((a, b) => a + b, 0);
    let nextRowSum = matrix[i + 1].reduce((a, b) => a + b, 0);

    let currColSum = 0;
    let nextColSum = 0;

    for (let j = 0; j < matrix.length; j++) {
      currColSum += matrix[i][j];
      nextColSum += matrix[i + 1][j];
    }

    if (currRowSum !== nextRowSum || currColSum !== nextColSum) {
      isMagical = false;
    }
  }

  return isMagical;
}

console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
