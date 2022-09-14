function greatestCommonDivisor(...params) {
  console.log(computeDivisor(...params));

  function computeDivisor(a, b) {
    let greatestDivisor = 0;

    for (let i = 1; i <= Math.max(a, b); i++) {
      if (a % i == 0 && b % i == 0) {
        greatestDivisor = i;
      }
    }
    return greatestDivisor;
  }
}

greatestCommonDivisor(15, 5);
// 5

greatestCommonDivisor(2154, 458);
// 2
