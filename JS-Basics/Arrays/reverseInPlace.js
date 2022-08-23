// Write a program, which receives an array of strings.
// Your task is to reverse the array without creating a new array.
// Print the resulting elements on a single line, space-separated.

function reverseInPlace(str) {
  for (let i = 0, k = str.length - 1; i < str.length / 2; i++, k--) {
    let temp = str[i];
    str[i] = str[k];
    str[k] = temp;
  }
  console.log(str.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
