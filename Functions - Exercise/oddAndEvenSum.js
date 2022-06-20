function oddAndEvenSum(number) {
  let numberToString = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let char of numberToString) {
    let currNum = Number(char);

    if (currNum % 2 === 0) {
      evenSum += currNum;
    } else {
      oddSum += currNum;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
