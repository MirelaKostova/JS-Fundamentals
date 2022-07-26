function race(input) {
  let nameMap = new Map();

  let names = input.shift().split(", ");
  names.forEach((name) => {
    nameMap.set(name, 0);
  });

  while (input[0] !== "end of race") {
    let token = input.shift();

    let patternName = /[A-Za-z]+/g;
    let patternDistance = /\d/g;

    let currName = token.match(patternName).join("");
    let currDistance = token
      .match(patternDistance)
      .map(Number)
      .reduce((a, b) => a + b, 0);

    if (nameMap.has(currName)) {
      let distance = nameMap.get(currName);

      distance += currDistance;
      nameMap.set(currName, distance);
    }
  }

  let sorted = Array.from(nameMap).sort((a, b) => b[1] - a[1]);

  //   console.log(sorted);

  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
