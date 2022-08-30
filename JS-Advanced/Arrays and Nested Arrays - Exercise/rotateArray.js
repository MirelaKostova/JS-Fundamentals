function rotateArray(array, num) {
  let newArray = [...array];

  for (let i = 0; i < num; i++) {
    let elToMove = newArray.pop();
    newArray.unshift(elToMove);
  }

  console.log(newArray.join(" "));
}

rotateArray(["1", "2", "3", "4"], 2);

rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
