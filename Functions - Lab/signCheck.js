function signCheck(num1, num2, num3) {
  function multipyTwoNums(num1, num2) {
    let multiply = 0;

    let num1Positive = num1 < 0 ? num1 * -1 : num1;
    let num2Positive = num2 < 0 ? num2 * -1 : num2;

    for (let i = 0; i < num2Positive; i++) {
      multiply += num1Positive;
    }

    let negativeCounts = 0;

    if (num1Positive != num1) {
      negativeCounts++;
    }

    if (num2Positive != num2) {
      negativeCounts++;
    }

    return negativeCounts === 1 ? multiply * -1 : multiply;
  }

  let result = multipyTwoNums(num1, num2);
  let finalResult = multipyTwoNums(result, num3);
  //   console.log(finalResult);

  if (finalResult < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
