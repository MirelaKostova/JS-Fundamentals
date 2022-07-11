function flightSchedule(arr) {
  class Flight {
    constructor(number, destination) {
      this.number = number;
      this.destination = destination;
      this.status = "Ready to fly";
      this.statusChanged = false;
    }
  }

  // ---------------------------------------------
  // Load flights from input

  let allFlights = [];

  for (const flight of arr[0]) {
    let token = flight.split(" ");
    let number = token.shift();
    let destination = token.join(" ");
    // console.log("number -->", number);
    // console.log("status -->", destination);

    let newFlight = new Flight(number, destination);
    allFlights.push(newFlight);
  }

  //   console.log("allFlights -->", allFlights);

  // ---------------------------------------------
  // Handle changed flights

  for (const statusFlight of arr[1]) {
    let [number, changedStatus] = statusFlight.split(" ");
    // console.log("number -->", number);
    // console.log("status -->", changedStatus);

    let foundFlight = allFlights.find((currFligth) => {
      return currFligth.number == number;
    });

    if (foundFlight) {
      foundFlight.status = changedStatus;
      foundFlight.statusChanged = true;
    }
  }
  //   console.log("allFlights -->", allFlights);

  // ---------------------------------------------
  // Print flights

  if (arr[2][0] === "Ready to fly") {
    allFlights
      .filter((currFligth) => !currFligth.statusChanged)
      .forEach((flight) =>
        console.log(
          `{ Destination: '${flight.destination}', Status: 'Ready to fly' }`
        )
      );
  } else {
    allFlights
      .filter((currFligth) => currFligth.statusChanged)
      .forEach((el) => {
        console.log(
          `{ Destination: '${el.destination}', Status: 'Cancelled' }`
        );
      });
  }
}

// flightSchedule([
//   [
//     "WN269 Delaware",
//     "FL2269 Oregon",
//     "WN498 Las Vegas",
//     "WN3145 Ohio",
//     "WN612 Alabama",
//     "WN4010 New York",
//     "WN1173 California",
//     "DL2120 Texas",
//     "KL5744 Illinois",
//     "WN678 Pennsylvania",
//   ],
//   [
//     "DL2120 Cancelled",
//     "WN612 Cancelled",
//     "WN1173 Cancelled",
//     "SK430 Cancelled",
//   ],
//   ["Cancelled"],
// ]);

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
