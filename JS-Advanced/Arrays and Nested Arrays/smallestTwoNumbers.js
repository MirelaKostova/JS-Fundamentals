function smallestTwoNumbers(input) {
  let sorted = input.sort((a, b) => a - b).slice(0, 2);

  console.log(sorted);
}

smallestTwoNumbers([30, 15, 50, 5]);

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
