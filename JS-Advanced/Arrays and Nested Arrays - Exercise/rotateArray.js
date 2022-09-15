function rotateArray(array, num) {
  let newArray = [...array];
  let rotations = num % newArray.length;

  for (let i = 0; i < rotations; i++) {
    newArray.unshift(newArray.pop());
  }

  console.log(newArray.join(" "));
}

rotateArray(["1", "2", "3", "4"], 2);

console.log("----------");
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);

// --------- second solution ---------
/*
function rotateArray(array, num) {
  let newArray = [...array];

  for (let i = 0; i < num; i++) {
    let elToMove = newArray.pop();
    newArray.unshift(elToMove);
  }

  console.log(newArray.join(" "));
}
*/
