function shootForTheWin(input) {
  let sequence = input.shift().split(" ").map(Number);
  let countOfShotTargets = 0;

  while (input[0] !== "End") {
    let index = Number(input.shift());
    let currValue = sequence[index];
    let isValid = currValue !== -1 && index >= 0 && index < sequence.length;

    if (isValid) {
      countOfShotTargets++;
      sequence[index] = -1;

      for (let i = 0; i < sequence.length; i++) {
        let currTarget = sequence[i];

        if (currTarget !== -1) {
          if (currTarget > currValue) {
            currTarget -= currValue;
          } else {
            currTarget += currValue;
          }
        }
        sequence[i] = currTarget;
      }
    }
  }

  return `Shot targets: ${countOfShotTargets} -> ${sequence.join(" ")}`;
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
