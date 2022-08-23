function addAndSubtract(input) {
  let originalArrSum = 0;
  let modifiedArrSum = 0;
  let newArr = [];
  let inputL = input.length;

  for (let n = 0; n < inputL; n++) {
    let currNum = input[n];
    originalArrSum += currNum;

    if (currNum % 2 == 0) {
      currNum += n;
    } else {
      currNum -= n;
    }
    newArr.push(currNum);
    modifiedArrSum += currNum;
  }

  console.log(newArr);
  console.log(originalArrSum);
  console.log(modifiedArrSum);
}
