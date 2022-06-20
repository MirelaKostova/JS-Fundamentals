function addAndSubtract(n1, n2, n3) {
  let sumOfFirstTwoNums = sum(n1, n2);
  let finalResult = substract(sumOfFirstTwoNums, n3);

  function sum(n1, n2) {
    return n1 + n2;
  }

  function substract(sumOfFirstTwoNums, n3) {
    return sumOfFirstTwoNums - n3;
  }

  console.log(finalResult);
}

addAndSubtract(23, 6, 10);
