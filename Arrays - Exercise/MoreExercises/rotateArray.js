function rotateArray(array) {
  let newArr = array.slice(0, array.length - 1);
  let rotations = Number(array.pop());

  for (let i = 0; i < rotations; i++) {
    let currNumToRotate = newArr.pop();
    newArr.unshift(currNumToRotate);
  }

  console.log(newArr.join(" "));
}

rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
