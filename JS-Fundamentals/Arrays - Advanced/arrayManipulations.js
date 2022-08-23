function arrayManipulation(commands) {
  let arr = commands.shift().split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, num, index] = commands[i].split(" ");

    num = Number(num);
    index = Number(index);

    switch (command) {
      case "Add":
        arr.push(num);
        break;
      case "Remove":
        arr = arr.filter((el) => el != num);
        break;
      case "RemoveAt":
        arr.splice(num, 1);
        break;
      case "Insert":
        arr.splice(index, 0, num);
        break;
    }
  }
  console.log(arr.join(" "));
}

arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
