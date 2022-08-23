function arrayRotation(arr, rotations) {
  while (rotations > 0) {
    let numToMove = arr.shift();
    arr.push(numToMove);
    rotations--;
  }

  console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
