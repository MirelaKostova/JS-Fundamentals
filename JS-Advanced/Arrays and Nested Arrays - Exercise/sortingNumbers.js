function sortingNumbers(array) {
  array.sort((a, b) => a - b);

  console.log(array);

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const lastEl = array.pop();
    array.splice(index + 1, 0, lastEl);
  }

  console.log(array);
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// /[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
