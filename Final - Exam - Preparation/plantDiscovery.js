function plantDiscovery(input) {
  const number = Number(input.shift());
  const splitLine = /<->/g;
  const splitCommand = /[:-]/g;
  const splitParams = /\s+/;

  //create collection
  let plantCollection = {};

  let actions = {
    Rate: rate,
    Update: update,
    Reset: reset,
  };

  //parse first lines input
  for (let i = 0; i < number; i++) {
    const line = input.shift();

    let [plant, rarity] = line.split(splitLine);

    plantCollection[plant] = {
      rarity: Number(rarity),
      rating: [],
      avgRate: 0,
    };
  }

  //parse input till command "Exhibition"
  input.forEach((commandLine) => {
    if (commandLine !== "Exhibition") {
      let [command, ...params] = commandLine
        .replace(splitCommand, "")
        .split(splitParams);

      actions[command](...params);
    }
  });

  //print result
  console.log("Plants for the exhibition:");
  // if(plantCollection)
  Object.entries(plantCollection).forEach(([plant, data]) =>
    console.log(
      `- ${plant}; Rarity: ${data.rarity}; Rating: ${data.avgRate.toFixed(2)}`
    )
  );

  function avgRate(plant) {
    return plantCollection[plant].rating.reduce(
      (a, b) => (a + b) / plantCollection[plant].rating.length
    );
  }
  //  Rate  ()
  function rate(plant, rating) {
    if (plantCollection[plant] !== undefined) {
      plantCollection[plant].rating.push(Number(rating));
      plantCollection[plant].avgRate = avgRate(plant);
    } else {
      console.log("error");
    }
  }
  // Update ()
  function update(plant, newRarity) {
    if (plantCollection[plant] !== undefined) {
      plantCollection[plant].rarity = Number(newRarity);
    } else {
      console.log("error");
    }
  }
  // Reset ()
  function reset(plant) {
    if (plantCollection[plant] !== undefined) {
      plantCollection[plant].rating.length = 0;
      plantCollection[plant].avgRate = 0;
    } else {
      console.log("error");
    }
  }
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

/*
function plantDiscovery(input) {
  let actions = {
    Rate: rate,
    Update: update,
    Reset: reset,
  };

  //  create plant catalog.
  let catalog = {};

  //  get the number for next n lines
  let n = Number(input.shift());

  // parse input
  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split("<->");
    // store the information in catalog
    // - parse rarity to Number (we need to sorted by rarity)
    // - store all ratings => [];
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

  //print result
  console.log("Plants for the exhibition:");
  for (let plant of Object.entries(catalog)) {
    // console.log(plant);
    console.log(
      `- ${plant[0]}; Rarity: ${
        plant[1].rarity
      }; Rating: ${plant[1].avgRate.toFixed(2)}`
    );
  }

  function rate(line) {
    let [name, rating] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.rate.push(Number(rating));

      let total = 0;
      for (let rating of plant.rate) {
        total += rating;
      }

      plant.avgRate = total / plant.rate.length;
    } else {
      console.log("error");
    }
  }

  function update(line) {
    let [name, rarity] = line.split(" - ");
    if (catalog[name] !== undefined) {
      catalog[name].rarity = Number(rarity);
    } else {
      console.log("error");
    }
  }

  function reset(name) {
    if (catalog[name] !== undefined) {
      catalog[name].rate.length = 0;
      catalog[name].avgRate = 0;
    } else {
      console.log("error");
    }
  }
}
*/

// plantDiscovery([
//   "3",
//   "Arnoldii<->4",
//   "Woodii<->7",
//   "Welwitschia<->2",
//   "Rate: Woodii - 10",
//   "Rate: Welwitschia - 7",
//   "Rate: Arnoldii - 3",
//   "Rate: Woodii - 5",
//   "Update: Woodii - 5",
//   "Reset: Arnoldii",
//   "Exhibition",
// ]);
