// function repeatString(str, n) {
//   let finalString = "";
//   let index = null;

//   while (index < n) {
//     finalString += str;
//     index++;
//   }
//   console.log(finalString);
// }

// repeatString("abc", 3);

// *** Short Version ***
function repeatString(str, n) {
  let result = str.repeat(n);
  return result;
}
