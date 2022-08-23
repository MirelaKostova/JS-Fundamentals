function archeryChampion(input) {
  let archeryField = input.shift().split("|").map(Number);
  let fieldLength = archeryField.length;
  let points = 0;

  // loop until "Game over"
  while (input[0] !== "Game over") {
    let [command, param1, param2] = input.shift().split("@");
    param1 = Number(param1);
    param2 = Number(param2);

    switch (command) {
      case "Shoot Left":
        shootLeft(param1, param2);
        break;

      case "Shoot Right":
        shootRight(param1, param2);
        break;

      case "Reverse":
        reverse();
        break;
    }
  }

  //print result
  console.log(archeryField.join(" - "));
  console.log(`John finished the archery tournament with ${points} points!`);

  // Shoot Left
  function shootLeft(startIndex, length) {
    let indexOfTarget = 0;

    if (isIndexInField(startIndex)) {
      let indexCalc = startIndex - length;

      if (indexCalc < 0) {
        let steps = (indexCalc * -1) % fieldLength;
        indexOfTarget = fieldLength - steps;
      } else {
        indexOfTarget = indexCalc;
      }

      shoot(indexOfTarget);
    }
  }

  // Shoot Right
  function shootRight(startIndex, length) {
    let indexOfTarget = 0;

    if (isIndexInField(startIndex)) {
      let indexCalc = startIndex + length;

      if (indexCalc > fieldLength) {
        let steps = indexCalc % fieldLength;
        indexOfTarget = steps;
      } else {
        indexOfTarget = indexCalc;
      }

      shoot(indexOfTarget);
    }
  }

  // 	Reverse
  function reverse() {
    archeryField.reverse();
  }

  function isIndexInField(index) {
    return index >= 0 && index < archeryField.length;
  }

  function shoot(index) {
    let currTargetPoints = archeryField[index];

    if (currTargetPoints < 5) {
      archeryField[index] = 0;
      points += currTargetPoints;
    } else {
      archeryField[index] = currTargetPoints - 5;
      points += 5;
    }
  }
}

// archeryChampion([
//   "10|10|10|10|10",
//   "Shoot Left@0@2",
//   "Shoot Right@4@5",
//   "Shoot Right@6@5",
//   "Reverse",
//   "Game over",
// ]);

archeryChampion([
  "20|30|40|50|60",
  "Shoot Left@0@12",
  "Shoot Right@4@15",
  "Shoot Left@6@5",
  "Reverse",
  "Game over",
]);
