function plantDiscovery(input) {
  let actions = {
    Rare: () => {},
    Update: () => {},
    Reset: () => {},
  };

  //  parse input and create plant catalog
  let catalog = {};

  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split("<->");
    catalog[name] = {
      rarity: Number(rarity),
      rate: [],
      avgRate: 0,
    };
  }

  // update catolog by given commands

  while (input[0] !== "Exhibition") {
    let [command, params] = input.shift().split(": ");
    let action = actions[command];
    action(params);
  }
  // sort catalog

  //print result

  function rate(line) {
    let [name, rating] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.ratings.push();

      let total = 0;
      for (let rating of plant.ratings) {
        total += rating;
      }

      plant.avgRate = total / plant.ratings.length;
    } else {
      console.log("error");
    }
  }

  function update(line) {}
  function reset(line) {}
}

plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
