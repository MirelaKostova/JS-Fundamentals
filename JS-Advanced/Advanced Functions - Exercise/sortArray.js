function sortArray(arr, arg) {
  return arr.sort((a, b) => (arg == "asc" ? a - b : b - a));
}

console.log(sortArray([14, 7, 17, 6, 8], "asc"));
// [6, 7, 8, 14, 17]

console.log(sortArray([14, 7, 17, 6, 8], "desc"));
// [17, 14, 8, 7, 6]
