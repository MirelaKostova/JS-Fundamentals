function aggregateElements(numbers) {
  aggregate(numbers, 0, (a, b) => a + b);
  aggregate(numbers, 0, (a, b) => a + 1 / b);
  aggregate(numbers, "", (a, b) => a + b);

  function aggregate(numbers, initVal, func) {
    let value = initVal;

    for (let i = 0; i < numbers.length; i++) {
      value = func(value, numbers[i]);
    }
    console.log(value);
  }
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

/*
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
*/
