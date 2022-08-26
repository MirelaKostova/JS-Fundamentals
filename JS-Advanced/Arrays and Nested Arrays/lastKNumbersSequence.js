function lastKNumbersSequence(n, k) {
  let result = [1];

  for (let i = 0; i < n - 1; i++) {
    let currEl = result.slice(-k).reduce((a, b) => a + b, 0);
    result.push(currEl);
  }

  console.log(result);
}

lastKNumbersSequence(6, 3);
// [1, 1, 2, 4, 7, 13]

lastKNumbersSequence(8, 2);
// [1, 1, 2, 3, 5, 8, 13, 21]
