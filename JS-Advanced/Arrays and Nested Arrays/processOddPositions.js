function processOddPositions(input) {
  const result = input
    .filter((el, i) => i % 2 !== 0)
    .map((el) => el + el)
    .reverse()
    .join(" ");

  return result;
}

processOddPositions([10, 15, 20, 25]);
// 50 30

processOddPositions([3, 0, 10, 4, 7, 3]);
// 6 8 0
