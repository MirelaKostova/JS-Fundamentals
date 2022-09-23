function calorieObject(input) {
  let result = {};
  input.forEach((currEl, i) => {
    if (i % 2 !== 0) {
      result[input[i - 1]] = Number(input[i]);
    }
  });

  console.log(result);
}

// function calorieObject(input) {
//   let result = {};

//   for (let i = 1; i < input.length; i += 2) {
//     result[input[i - 1]] = Number(input[i]);
//   }

//   console.log(result);
// }

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
