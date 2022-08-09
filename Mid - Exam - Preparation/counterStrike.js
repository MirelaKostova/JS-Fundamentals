function counterStrike(input) {
  let energy = Number(input.shift());
  let wonCount = 0;

  while (input[0] !== "End of battle") {
    let distance = Number(input.shift());

    if (energy < distance) {
      return `Not enough energy! Game ends with ${wonCount} won battles and ${energy} energy`;
    } else {
      energy -= distance;
      wonCount++;

      if (wonCount % 3 === 0) {
        energy += wonCount;
      }
    }
  }
  return `Won battles: ${wonCount}. Energy left: ${energy}`;
}

// counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
