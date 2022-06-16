function sumEvenNumbers(arr) {
  let sumOfEvenNums = 0;

  for (let num of arr) {
    num = Number(num);
    if (num % 2 == 0) {
      sumOfEvenNums += num;
    }
  }
  console.log(sumOfEvenNums);
}
