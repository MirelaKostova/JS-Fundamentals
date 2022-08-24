function mathOperations(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    case "%":
      result = num1 % num2;
      break;

    case "**":
      result = num1 ** num2;
      break;
  }

  console.log(result);
}

mathOperations(5, 6, "+");
// 11

mathOperations(3, 5.5, "*");
// 16.5
