function sequences(array) {
  let sequence = array.map((element) => JSON.parse(element));
  let sorted = sequence.map((arr) => arr.sort((a, b) => b - a));

  let unique = sorted.filter((arr, index) => {
    return arr[index] !== arr[index + 1];
  });

  //   sequence.map((currArr) => {
  //     currArr;
  //   });
  console.log(unique);
}

sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);

// sequences([
//   "[7.14, 7.180, 7.339, 80.099]",
//   "[7.14, 7.180, 7.339, 80.099]",
//   "[7.339, 80.0990, 7.140000, 7.18]",
//   "[7.339, 7.180, 7.14, 80.099]",
// ]);

// function sequences(input) {
//   let numbers = input
//     .map(JSON.parse)
//     .map((arr) => arr.sort((a, b) => b - a))
//     .map(JSON.stringify);

//   Array.from(new Set(numbers))
//     .map(JSON.parse)
//     .sort((a, b) => a.length - b.length)
//     .forEach((arr) => console.log(`[${arr.join(", ")}]`));
// }
