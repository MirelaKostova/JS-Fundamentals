// Write a function that receives an array of numbers and prints the sum of the first and last element in that array.

function sumFirstAndLastArrayElements(numbers) {
  let firstNum = numbers[0];
  let lastNum = numbers[numbers.length - 1];
  let sum = firstNum + lastNum;

  console.log(sum);
}

sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);
