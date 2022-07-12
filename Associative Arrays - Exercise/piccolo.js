function piccolo(data) {
  let parkingLot = new Set();

  for (let currLine of data) {
    let [direction, carNumber] = currLine.split(", ");

    if (direction === "IN") {
      parkingLot.add(carNumber);
    } else if (direction === "OUT") {
      parkingLot.delete(carNumber);
    }
  }

  let sortedCars = Array.from(parkingLot.values()).sort();

  sortedCars.length > 0
    ? console.log(sortedCars.join("\n"))
    : console.log("Parking Lot is Empty");
}

piccolo([
  "OUT, CA2844AA",
  "IN, CA2844AA",
  "OUT, CA1234TA",
  "IN, CA1234TA",
  "IN, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "IN, CA2822UU",
  "OUT, CA2866HI",
  "IN, CA9876HH",
]);

// piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
