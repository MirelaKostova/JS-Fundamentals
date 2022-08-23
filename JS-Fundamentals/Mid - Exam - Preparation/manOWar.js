function manOWar(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealth = Number(input.shift());

  let isWin = false;
  let isLost = false;

  while (input[0] !== "Retire") {
    let [command, ...params] = input.shift().split(" ");
    params = params.map(Number);

    if (command == "Fire") {
      fire(params);
      if (isWin) {
        console.log("You won! The enemy ship has sunken.");
        break;
      }
    } else if (command == "Defend") {
      defend(params);
      if (isLost) {
        console.log("You lost! The pirate ship has sunken.");
        break;
      }
    } else if (command == "Repair") {
      repair(params);
    } else if (command == "Status") {
      status(maxHealth);
    }
  }

  //print result
  let pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
  let warShipSum = warShip.reduce((a, b) => a + b, 0);

  if (!isWin && !isLost) {
    console.log(
      `Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`
    );
  }

  // "Fire {index} {damage}"
  function fire([index, damage]) {
    if (isIndexValid(index, warShip.length)) {
      let currDamage = warShip[index];
      currDamage -= damage;

      if (currDamage <= 0) {
        return (isWin = true);
      } else {
        warShip[index] = currDamage;
      }
    }
  }

  // "Defend {startIndex} {endIndex} {damage}"
  function defend([startIndex, endIndex, damage]) {
    if (
      isIndexValid(startIndex, pirateShip.length) &&
      isIndexValid(endIndex, pirateShip.length)
    ) {
      for (let i = startIndex; i <= endIndex; i++) {
        let currDamage = pirateShip[i];
        currDamage -= damage;

        if (currDamage <= 0) {
          return (isLost = true);
        } else {
          pirateShip[i] = currDamage;
        }
      }
    }
  }

  // "Repair {index} {health}"
  function repair([index, health]) {
    if (isIndexValid(index, pirateShip.length)) {
      let currHealth = pirateShip[index];
      currHealth += health;

      if (currHealth > maxHealth) {
        return (pirateShip[index] = maxHealth);
      }

      return (pirateShip[index] = currHealth);
    }
  }

  // "Status"
  function status(maxHealth) {
    let needRepair = pirateShip.filter((section) => section < maxHealth * 0.2);
    console.log(`${needRepair.length} sections need repair.`);
  }

  // index validation
  function isIndexValid(index, length) {
    return index >= 0 && index < length;
  }
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);

// manOWar([
//   "2>3>4>5>2",
//   "6>7>8>9>10>11",
//   "20",
//   "Status",
//   "Fire 2 3",
//   "Defend 0 4 11",
//   "Repair 3 18",
//   "Retire",
// ]);
