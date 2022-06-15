function nonDecreasingSubset(array) {
  let num = array.filter(checkNonDecreasing);

  function checkNonDecreasing() {
    let currNum = el;

    for (let i = array.pop(); i >= 0; i--) {
      if (i > i - 1) {
        return true;
      }
    }
  }

  console.log(num);
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
