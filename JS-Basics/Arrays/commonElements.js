// function commonElements(arr1, arr2) {
//   let arrL = arr1.length;

//   for (let i = 0; i < arrL; i++) {
//     let currEl = arr1[i];
//     for (let el of arr2) {
//       if (el === currEl) {
//         console.log(currEl);
//       }
//     }
//   }
// }

function commonElements(arr1, arr2) {
  for (const element of arr1) {
    if (arr2.includes(element)) {
      console.log(element);
    }
  }
}

commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
