function maxSequenceOfEqualElement(array) {
  let equalElements = [];
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let equalNumsTemp = [];
    let currNum = array[i];

    for (let j = i; j < arrayL; j++) {
      let nextNum = array[j];

      if (currNum === nextNum) {
        equalNumsTemp.push(nextNum);
      } else {
        break;
      }

      if (equalNumsTemp.length > equalElements.length) {
        equalElements = equalNumsTemp;
      }
    }
  }

  console.log(equalElements.join(" "));
}

maxSequenceOfEqualElement([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElement([0, 1, 1, 5, 2, 2, 6, 3, 3]);
maxSequenceOfEqualElement([4, 4, 4, 4]);
