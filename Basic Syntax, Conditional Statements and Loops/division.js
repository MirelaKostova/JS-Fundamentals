function division(num) {
  let isBiggerDivision = false;
  let biggerNumber = 0;

  if (num % 10 === 0) {
    isBiggerDivision = true;
    biggerNumber = 10;
  } else if (num % 7 === 0) {
    isBiggerDivision = true;
    biggerNumber = 7;
  } else if (num % 6 === 0) {
    isBiggerDivision = true;
    biggerNumber = 6;
  } else if (num % 3 === 0) {
    isBiggerDivision = true;
    biggerNumber = 3;
  } else if (num % 2 === 0) {
    isBiggerDivision = true;
    biggerNumber = 2;
  }

  if (isBiggerDivision) {
    console.log(`The number is divisible by ${biggerNumber}`);
  } else {
    console.log("Not divisible");
  }
}
