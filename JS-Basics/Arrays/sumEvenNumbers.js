// function sumEvenNumbers(arr) {
//   let sumOfEvenNums = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let num = Number(arr[i]);
//     if (num % 2 == 0) {
//       sumOfEvenNums += num;
//     }
//   }
//   console.log(sumOfEvenNums);
// }
// sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);

function sumEvenNumbers(arr) {
  let sumOfEvenNums = 0;

  for (let num of arr) {
    num = Number(num);
    if (num % 2 == 0) {
      sumOfEvenNums += num;
    }
  }
  console.log(sumOfEvenNums);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
