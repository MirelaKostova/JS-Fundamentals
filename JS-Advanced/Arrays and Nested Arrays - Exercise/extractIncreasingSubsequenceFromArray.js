function extractIncreasingSubsequenceFromArray(input) {
  // reduce((previousValue, currentValue) => { /* … */ } )

  const result = input.reduce((previousValue, currentValue) => {
    const maxNumber = previousValue[previousValue.length - 1];

    if (currentValue >= maxNumber || previousValue.length == 0) {
      previousValue.push(currentValue);
    }

    return previousValue;
  }, []);

  return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// [1, 3, 8, 10, 12, 24]

extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
// [1, 2, 3, 4]

extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);
// [20]
