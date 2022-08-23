function arrayModifier(array) {
  let modifiedArr = array.shift().split(" ").map(Number);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "end") {
      break;
    } else {
      let commandLine = array[i].split(" ");
      let commands = commandLine[0];
      let index1 = Number(commandLine[1]);
      let index2 = Number(commandLine[2]);

      switch (commands) {
        case "swap":
          // [arr[0], arr[1]] = [arr[1], arr[0]];
          let x = modifiedArr[index1];
          modifiedArr.splice(index1, 1, modifiedArr[index2]);
          modifiedArr.splice(index2, 1, x);
          break;
        case "multiply":
          let result = modifiedArr[index1] * modifiedArr[index2];
          modifiedArr.splice(index1, 1, result);

          break;
        case "decrease":
          modifiedArr = modifiedArr.map((el) => el - 1);
          break;
      }
    }
  }

  console.log(modifiedArr.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
