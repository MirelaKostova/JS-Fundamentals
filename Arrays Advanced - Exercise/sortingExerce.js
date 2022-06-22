// function sorting(numbers) {
//   let sortedNums = [];

//   for (let el of numbers) {
//     let biggest = numbers.sort((a, b) => b - a);
//     let currentBigest = biggest.shift();
//     sortedNums.push(currentBigest);

//     let smallest = numbers.sort((a, b) => a - b);
//     let currentSmallest = smallest.shift();
//     sortedNums.push(currentSmallest);
//   }
//   console.log(sortedNums.join(" "));
// }
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

// 94 1 69 2 63 3 52 18 31 21

function sorting(numbers) {
  let sortedNums = [];
  let biggest = numbers.sort((a, b) => b - a);

  console.log(biggest.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
