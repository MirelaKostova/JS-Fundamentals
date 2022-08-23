// Write a program, which receives a number n and an array of elements.
// Your task is to create a new array with n numbers from the original array,
// reverse it and print its elements on a single line, space-separated

function reverseAnArrayOfNumbers(n, arr) {
  let result = [];

  for (let i = n - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
