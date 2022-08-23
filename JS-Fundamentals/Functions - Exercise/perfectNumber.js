function perfectNumber(number) {
  let sumOfDivisors = 1;

  for (let currentNum = 2; currentNum < number; currentNum++) {
    if (number % currentNum === 0) {
      sumOfDivisors += currentNum;
    }
  }

  let isPerfect =
    sumOfDivisors === number
      ? "We have a perfect number!"
      : `It's not so perfect.`;

  console.log(isPerfect);
}

perfectNumber(6);
