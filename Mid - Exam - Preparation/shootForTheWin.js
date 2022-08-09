function shootForTheWin(input) {
  let sequence = input.shift().split(" ").map(Number);
  let countOfShotTargets = 0;

  while (input[0] !== "End") {
    let index = Number(input.shift());
    let currValue = sequence[index];
    let isValid = currValue !== undefined && currValue != "-1";

    if (isValid) {
      countOfShotTargets++;
      sequence[index] = -1;

      sequence.forEach((el) => {
        if (el !== sequence[index]) {
          if (el > currValue) {
            sequence[sequence.indexOf(el)] -= currValue;
          } else {
            sequence[sequence.indexOf(el)] += currValue;
          }
        }
      });
    }
  }

  console.log(`Shot targets: ${countOfShotTargets} -> ${sequence.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
