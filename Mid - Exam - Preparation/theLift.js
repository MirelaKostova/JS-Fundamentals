function theLift(input) {
  let peopleWaitnig = Number(input[0]);
  let people = peopleWaitnig;
  let wagons = input[1].split(" ").map(Number);

  let allSeats = wagons.length * 4;
  let notFreeSeats = allSeats - wagons.reduce((a, b) => a + b, 0);

  for (let i = 0; i < wagons.length; i++) {
    if (people <= 0) {
      break;
    }

    let currWagon = wagons[i];
    let currPeople = 4 - currWagon;

    if (currPeople >= 0) {
      if (people < 4 && currPeople > 0) {
        wagons[i] += people;
      } else {
        wagons[i] += currPeople;
      }
      people -= currPeople;
    }
  }

  let peopleOnTrain = wagons.reduce((a, b) => a + b, 0);

  if (people <= 0 && allSeats - peopleOnTrain > 0) {
    console.log("The lift has empty spots!");
  } else {
    console.log(
      `There isn't enough space! ${
        peopleWaitnig - (peopleOnTrain - notFreeSeats)
      } people in a queue!`
    );
  }
  console.log(wagons.join(" "));
}

// theLift(["15", "0 0 0 0 0"]);
// console.log("---------");
theLift(["20", "0 2 0"]);

// function theLift(input) {
//   let peopleWaitingForLift = Number(input[0]);
//   let liftState = input[1].split(" ").map(Number);

//   let initialOccupiedSpots = liftState.reduce((a, b) => a + b, 0);
//   let liftStateLength = liftState.length;

//   for (let i = 0; i < liftStateLength; i++) {
//     if (peopleWaitingForLift <= 0) {
//       break;
//     }

//     let currentPeople = 4 - liftState[i];
//     peopleWaitingForLift -= currentPeople;

//     if (peopleWaitingForLift < 0) {
//       currentPeople += peopleWaitingForLift;
//     }

//     liftState[i] += currentPeople;
//   }

//   let maxSpots = liftState.length * 4 - initialOccupiedSpots;
//   let currentOccupiedSpots = liftState.reduce((a, b) => a + b, 0);
//   let emptySpots = maxSpots - currentOccupiedSpots;

//   if (emptySpots > 0 && peopleWaitingForLift <= 0) {
//     console.log("The lift has empty spots!");
//   } else if (peopleWaitingForLift > 0 && emptySpots <= 0) {
//     console.log(
//       `There isn't enough space! ${peopleWaitingForLift} people in a queue!`
//     );
//   }

//   console.log(liftState.join(" "));
// }
