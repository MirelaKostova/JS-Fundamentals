function sameNumbers(number) {
  let numAsString = number + "";
  let firstDigit = Number(numAsString[0]);
  let sum = firstDigit;
  let isSame = true;

  for (let i = 1; i < numAsString.length; i++) {
    if (numAsString[i] != firstDigit) {
      isSame = false;
    }
    sum += Number(numAsString[i]);
  }

  isSame ? console.log(`true\n${sum}`) : console.log(`false\n${sum}`);
}

sameNumbers(2222222);
// true
// 14

sameNumbers(1234);
// false
// 10
