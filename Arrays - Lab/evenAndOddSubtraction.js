function evenAndOddSubtraction(arr) {
  let sumOfEven = 0;
  let sumOfOdd = 0;

  for (let num of arr) {
    if (num % 2 == 0) {
      sumOfEven += num;
    } else {
      sumOfOdd += num;
    }
  }

  let subtraction = sumOfEven - sumOfOdd;
  console.log(subtraction);
}
