function memoryGame(input) {
  let sequenceOfEl = input.shift().split(" ");
  let moves = 0;
  let isWinner = false;

  for (let line of input) {
    if (line === "end") {
      break;
    }

    let [index1, index2] = line.split(" ").map(Number);
    moves++;
    let isEqual = index1 === index2;
    let isNotInBounds =
      index1 < 0 ||
      index1 >= sequenceOfEl.length ||
      index2 < 0 ||
      index2 >= sequenceOfEl.length;

    if (isEqual || isNotInBounds) {
      console.log("Invalid input! Adding additional elements to the board");
      let elToAdd = `-${moves}a`;
      let index = Math.floor(sequenceOfEl.length / 2);
      sequenceOfEl.splice(index, 0, elToAdd, elToAdd);
    } else if (!isEqual || !isNotInBounds) {
      if (sequenceOfEl[index1] == sequenceOfEl[index2]) {
        console.log(
          `Congrats! You have found matching elements - ${sequenceOfEl[index1]}!`
        );
        sequenceOfEl = sequenceOfEl.filter((el) => el !== sequenceOfEl[index1]);
      } else if (sequenceOfEl[index1] !== sequenceOfEl[index2]) {
        console.log("Try again!");
      }
    }

    if (sequenceOfEl.length <= 0) {
      isWinner = true;
      break;
    }

    // console.log(sequenceOfEl);
  }

  if (sequenceOfEl.length <= 0) {
    isWinner = true;
  }

  if (isWinner) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log("Sorry you lose :(\n" + `${sequenceOfEl.join(" ")}`);
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
console.log("------------");
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
console.log("------------");
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
