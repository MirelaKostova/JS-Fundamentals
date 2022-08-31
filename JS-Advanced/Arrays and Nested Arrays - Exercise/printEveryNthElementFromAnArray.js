function printEveryNthElementFromAnArray(array, num) {
  return array.filter((el, i) => i % num === 0);
}

printEveryNthElementFromAnArray(["5", "20", "31", "4", "20"], 2);

printEveryNthElementFromAnArray(["dsa", "asd", "test", "tset"], 2);

printEveryNthElementFromAnArray(["1", "2", "3", "4", "5"], 6);

// function printEveryNthElementFromAnArray(array, num) {
//   let newArray = [];

//   for (let i = 0; i < array.length; i += num) {
//     newArray.push(array[i]);
//   }

//   return newArray;
// }
