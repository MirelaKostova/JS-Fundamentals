function maxNumber(arr) {
  let topIntegers = [];
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let currNumber = arr[i];
    let isBigger = true;

    for (let j = i + 1; j < arrLength; j++) {
      let nextNumber = arr[j];

      if (nextNumber >= currNumber) {
        isBigger = false;
      }
    }

    if (isBigger) {
      topIntegers.push(currNumber);
    }
  }
  console.log(topIntegers.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
