function travelTime(input) {
  let destinationList = [];

  for (const line of input) {
    let [country, town, cost] = line.split(" > ");
    let destination = new Map();

    destination.set(country, {});
    if (destination[country].has(town)) {
      destination;
    }
    destinationList.push(destination);
    // destination[country].set();
    // destinationList.push(destination);
  }

  console.log(destinationList);
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
