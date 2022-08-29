function biggerHalf(input) {
  const halfPart = Math.ceil(input.length / 2);

  return input.sort((a, b) => a - b).slice(-halfPart);
}

biggerHalf([4, 7, 2, 5]);
//[5, 7]

biggerHalf([3, 19, 14, 7, 2, 19, 6]);
//[7, 14, 19, 19]
