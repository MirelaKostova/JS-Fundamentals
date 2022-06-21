function processOddNumbers(arr) {
  let oddNums = arr.filter((el, i) => i % 2 != 0);
  let doubledNums = oddNums.map((x) => x * 2);
  let result = doubledNums.reverse();

  console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
