function listOfNames(names) {
  names
    .sort((a, b) => a.localeCompare(b))
    .map((currName, i) => console.log(`${i + 1}.${currName}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
