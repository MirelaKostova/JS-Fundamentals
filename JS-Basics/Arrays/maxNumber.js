function maxNumber(arr) {
  let newArr = [];
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let currNum = arr[i];
    let isBiger = true;

    for (let j = i; j < arrLength; j++) {
      if (currNum < arr[j]) {
        isBiger = false;
      }
    }

    if (isBiger) {
      newArr.push(currNum);
    }
  }
  console.log(newArr.join(" "));
}

maxNumber([14, 24, 3, 19, 15, 17]);
