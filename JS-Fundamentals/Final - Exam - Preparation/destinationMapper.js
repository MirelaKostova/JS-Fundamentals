function destinationMapper(input) {
  let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
  let travelPoints = 0;
  let destinations = [];

  let valid = pattern.exec(input);

  while (valid !== null) {
    let destination = valid.groups.destination;

    destinations.push(destination);
    travelPoints += destination.length;

    valid = pattern.exec(input);
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
// destinationMapper("ThisIs some InvalidInput");
