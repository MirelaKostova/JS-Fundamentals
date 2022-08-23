function train(arr) {
  let newTrainComposition = arr.slice();
  let passengersInWagonsArr = newTrainComposition
    .shift()
    .split(" ")
    .map(Number);
  let maxCapacity = Number(newTrainComposition.shift());

  for (let i = 0; i < newTrainComposition.length; i++) {
    let command = newTrainComposition[i].split(" ");
    let passangers = Number(command[1]);

    if (command.length > 1) {
      passengersInWagonsArr.push(passangers);
    } else {
      for (let j = 0; j < passengersInWagonsArr.length; j++) {
        if (Number(command[0]) + passengersInWagonsArr[j] <= maxCapacity) {
          passengersInWagonsArr[j] += Number(command[0]);
          break;
        }
      }
    }
  }
  console.log(passengersInWagonsArr.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
