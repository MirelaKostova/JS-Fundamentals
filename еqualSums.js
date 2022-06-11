function equalSum(arr) {
  let arrLength = arr.length;
  let foundIndex = "no";
  for (let i = 0; i < arrLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let leftNums = 0; leftNums < arrLength; leftNums++) {
      leftSum += arr[leftNums];
    }

    for (let rightNums = i + 1; rightNums < arrLength; rightNums++) {
      rightNums += arr[rightNums];
    }

    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
}

equalSum([1, 2, 3, 3]);
