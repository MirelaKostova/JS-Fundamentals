function magicSum(array, num) {
  let arrMagicPairs = [];
  let magicPairs = null;
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = i + 1; j < arrayLength; j++) {
      let currNum = array[i];
      let nextNum = array[j];

      if (currNum + nextNum === num) {
        magicPairs = currNum + " " + nextNum;
        arrMagicPairs.push(magicPairs);
        console.log(magicPairs);
      }
    }
  }
}

magicSum([1, 2, 3, 4, 5, 6], 6);
