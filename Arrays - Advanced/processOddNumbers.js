function processOddNumbers(arr) {
  let filteredElements = arr.filter((el, i) => i % 2 != 0);
  let oddNums = filteredElements.map((x) => x * 2);
  let result = oddNums.reverse();

  console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
