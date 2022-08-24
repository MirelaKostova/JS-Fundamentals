function aggregateElements(array) {
  let sumOfElements = 0;
  let sumOfInveresedValues = 0;
  let concatElements = "";

  for (let el of array) {
    sumOfElements += el;
    sumOfInveresedValues += 1 / el;
    concatElements += el;
  }

  console.log(sumOfElements);
  console.log(sumOfInveresedValues);
  console.log(concatElements);
}

aggregateElements([1, 2, 3]);
// 6
// 1.8333333333333333
// 123

console.log("-----------------");

aggregateElements([2, 4, 8, 16]);
// 30
// 0.9375
// 24816
