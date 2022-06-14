function equalSums(arr) {
  let arrLength = arr.length;
  let foundIndex = null;
  let isIndexFound = false;

  for (let i = 0; i < arrLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let left = i - 1; left >= 0; left--) {
      leftSum += arr[left];
    }
    for (let right = i + 1; right < arrLength; right++) {
      rightSum += arr[right];
    }

    if (leftSum == rightSum) {
      foundIndex = i;
      isIndexFound = true;
    }
  }

  if (!isIndexFound) {
    console.log("no");
  } else {
    console.log(foundIndex);
  }
}

equalSums([1, 2, 3, 3]);
equalSums([0]);
