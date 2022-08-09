function memoryGame(input) {
  let sequenceOfEl = input.shift().map(Number);

  while (input[0] !== "end") {
    let currIndexes = input.shift().split(" ").map(Number);
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
