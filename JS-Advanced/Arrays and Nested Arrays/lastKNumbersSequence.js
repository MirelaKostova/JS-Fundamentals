function lastKNumbersSequence(n, k) {
  let result = [];

  for (let i = 1; i < n; i++) {
    let currEl = 1;

    for (let j = i; j <= k; j--) {
      currEl += result[j];
    }

    result.push(currEl);
  }

  console.log(result);
}

lastKNumbersSequence(6, 3);
// [1, 1, 2, 4, 7, 13]

lastKNumbersSequence(8, 2);
// [1, 1, 2, 3, 5, 8, 13, 21]
