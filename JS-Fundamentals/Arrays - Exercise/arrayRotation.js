function arrayRotation(arr, rotations) {
  while (rotations > 0) {
    let numToMove = arr.shift();
    arr.push(numToMove);
    rotations--;
  }

  console.log(arr.join(" "));
}
