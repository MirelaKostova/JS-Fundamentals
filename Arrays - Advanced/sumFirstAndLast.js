function sumFirstAndLast(array) {
  let firstNum = Number(array.shift());
  let lastNum = Number(array.pop());
  let sum = firstNum + lastNum;

  console.log(sum);
}

sumFirstAndLast(["20", "30", "40"]);
