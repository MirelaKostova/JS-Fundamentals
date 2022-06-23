function counterStrike(arr) {
  let arrOfNumbers = arr.map(Number);
  let energy = arrOfNumbers.shift();
  let wonCount = 0;
  let index = 0;

  while (!isNaN(arrOfNumbers[index])) {
    let distance = arrOfNumbers[index];

    if (energy == 0 || energy < distance) {
      energy = 0;
      console.log(
        `Not enough energy! Game ends with ${wonCount} won battles and ${energy} energy`
      );
      break;
    } else {
      energy -= distance;
      wonCount++;

      if (wonCount % 3 === 0) {
        energy += wonCount;
      }
      index++;
    }
  }

  if (isNaN(arrOfNumbers[index])) {
    console.log(`Won battles: ${wonCount}. Energy left: ${energy}`);
  }
}

counterStrike(["-100", "100"]);
