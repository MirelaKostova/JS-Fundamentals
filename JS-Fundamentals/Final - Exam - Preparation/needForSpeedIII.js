function needForSpeedIII(input) {
  let n = Number(input.shift());

  // actions
  let actions = {
    Drive: drive,
    Refuel: refuel,
    Revert: revert,
  };

  //create collection
  let garage = {};

  // for next "n" lines -> "{car}|{mileage}|{fuel}"
  //   - add to collection
  for (let i = 0; i < n; i++) {
    let [car, mileage, fuel] = input.shift().split("|");
    garage[car] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }
  //   console.log(garage);

  //parse input
  while (input[0] !== "Stop") {
    let [command, param1, param2, param3] = input.shift().split(" : ");
    let action = actions[command];
    action(param1, param2, param3);
  }

  // Drive ()
  function drive(car, distance, fuel) {
    if (garage[car].fuel < fuel) {
      console.log("Not enough fuel to make that ride");
    } else {
      garage[car].fuel = garage[car].fuel - Number(fuel);
      garage[car].mileage = garage[car].mileage + Number(distance);
      console.log(
        `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
      );
    }

    if (garage[car].mileage >= 100000) {
      console.log(`Time to sell the ${car}!`);
      delete garage[car];
    }
  }

  // Refuel ()
  function refuel(car, fuel) {
    if (garage[car].fuel + Number(fuel) > 75) {
      let rest = 75 - garage[car].fuel;
      garage[car].fuel = 75;

      console.log(`${car} refueled with ${rest} liters`);
    } else {
      let newFuel = garage[car].fuel + Number(fuel);
      garage[car].fuel = newFuel;
      let currFuel = newFuel - garage[car].fuel;

      console.log(`${car} refueled with ${fuel} liters`);
    }
  }

  // Revert ()
  function revert(car, kilometers) {
    let old = garage[car].mileage;
    let current = garage[car].mileage - Number(kilometers);

    garage[car].mileage = current;

    if (garage[car].mileage < 10000) {
      garage[car].mileage = 10000;
    } else {
      console.log(`${car} mileage decreased by ${old - current} kilometers`);
    }
  }

  //   print result
  for (let car in garage) {
    console.log(
      `${car} -> Mileage: ${garage[car].mileage} kms, Fuel in the tank: ${garage[car].fuel} lt.`
    );
  }
}

// needForSpeedIII([
//   "3",
//   "Audi A6|38000|62",
//   "Mercedes CLS|11000|35",
//   "Volkswagen Passat CC|45678|5",
//   "Drive : Audi A6 : 543 : 47",
//   "Drive : Mercedes CLS : 94 : 11",
//   "Drive : Volkswagen Passat CC : 69 : 8",
//   "Refuel : Audi A6 : 50",
//   "Revert : Mercedes CLS : 500",
//   "Revert : Audi A6 : 30000",
//   "Stop",
// ]);

// console.log("----------------------------------");
needForSpeedIII([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
