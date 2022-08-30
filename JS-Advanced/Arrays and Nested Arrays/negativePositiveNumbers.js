function negativePositiveNumbers(input) {
  const newArray = [];

  input.filter((number) =>
    number < 0 ? newArray.unshift(number) : newArray.push(number)
  );

  console.log(newArray.join("\n"));
}

negativePositiveNumbers([7, -2, 8, 9]);

console.log("---------");
negativePositiveNumbers([3, -2, 0, -1]);
