function factorialDivision(firstNum, secondNum) {
  function factorial(num1) {
    if (num1 === 0) {
      return 1;
    } else {
      return num1 * factorial(num1 - 1);
    }
  }

  let num1 = firstNum;
  let num2 = secondNum;

  let firstFactorial = factorial(num1);
  let secondFactorial = factorial(num2);

  function division(firstFactorial, secondFactorial) {
    return firstFactorial / secondFactorial;
  }

  console.log(division(firstFactorial, secondFactorial).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
