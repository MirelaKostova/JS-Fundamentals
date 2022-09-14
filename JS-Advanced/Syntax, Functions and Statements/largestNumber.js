function largestNumber(...params) {
  console.log(`The largest number is ${Math.max(...params)}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

/*
function largestNumber(num1, num2, num3) {
  let largestNumber = Math.max(num1, num2, num3);

  console.log(`The largest number is ${largestNumber}.`);
}
*/
