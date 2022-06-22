function sorting(numbers) {
  let sortedNums = numbers.slice();
  let result = [];
  let biggest = numbers.sort((a, b) => b - a);
  let smallest = sortedNums.sort((a, b) => a - b);

  // console.log(biggest.join());
  // console.log(smallest.join());
  for (let i = 0; i < numbers.length / 2; i++) {
    let smallNum = smallest[i];
    let bigNum = biggest[i];
    result.push(bigNum, smallNum);
  }

  if (numbers.length % 2 != 0) {
    result.pop();
  }
  console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
