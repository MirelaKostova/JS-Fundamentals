function negativePositiveNumbers(input) {
  let newArray = [];

  input.filter((number) =>
    number < 0 ? newArray.unshift(number) : newArray.push(number)
  );

  newArray.forEach((number) => {
    console.log(number);
  });
}

negativePositiveNumbers([7, -2, 8, 9]);

console.log("---------");
negativePositiveNumbers([3, -2, 0, -1]);
