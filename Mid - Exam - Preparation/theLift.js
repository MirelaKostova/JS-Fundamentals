function theLift(input) {
  let peopleWaitnig = Number(input[0]);
  let trainSpots = input[1].split(" ").map(Number);
  let allSpotsInTrain = trainSpots.length * 4;
  let allEmptySpots = allSpotsInTrain - trainSpots.reduce((a, b) => a + b, 0);

  let wagons = trainSpots.slice();

  for (let i = 0; i < wagons.length; i++) {
    if (peopleWaitnig <= 0) {
      break;
    }

    let currWagonSpots = wagons[i];
    if (currWagonSpots < 4) {
      if (peopleWaitnig < 4) {
        wagons[i] += peopleWaitnig;
        peopleWaitnig -= peopleWaitnig;
      } else {
        let currPeople = 4 - currWagonSpots;
        peopleWaitnig -= currPeople;
        wagons[i] += currPeople;
      }
    }
  }

  let emptySpots = allEmptySpots - wagons.reduce((a, b) => a + b, 0);

  if (peopleWaitnig <= 0 && emptySpots > 0) {
    console.log("The lift has empty spots!");
  } else if (peopleWaitnig > 0 && emptySpots <= 0) {
    console.log(
      `There isn't enough space! ${peopleWaitnig} people in a queue!`
    );
  }
  console.log(wagons.join(" "));
}
theLift(["15", "0 0 0 0 0"]);
console.log("---------");
theLift(["20", "0 2 0"]);
// theLift(["0", "4 4 4 4"]);
