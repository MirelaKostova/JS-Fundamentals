function muOnline(input) {
  let roomsArray = input.split("|");

  let bitcoins = 0;
  let health = 100;
  let rooms = 0;

  let isStillAlive = true;

  for (let element of roomsArray) {
    let [command, number] = element.split(" ");
    number = Number(number);
    rooms++;

    if (command === "potion") {
      potion(number);
    } else if (command === "chest") {
      chest(number);
    } else {
      fight(command, number);
    }

    if (!isStillAlive) {
      break;
    }
  }

  // potion
  function potion(number) {
    let prevHealth = health;
    health += number;
    let amount = number;

    if (health > 100) {
      amount = 100 - prevHealth;
      health = 100;
    }

    console.log(`You healed for ${amount} hp.`);
    console.log(`Current health: ${health} hp.`);
  }

  // chest
  function chest(number) {
    bitcoins += number;
    console.log(`You found ${number} bitcoins.`);
  }

  // fight monster
  function fight(monster, number) {
    health -= number;
    if (health > 0) {
      console.log(`You slayed ${monster}.`);
    } else {
      isStillAlive = false;
      console.log(`You died! Killed by ${monster}.`);
      console.log(`Best room: ${rooms}`);
    }
  }

  if (isStillAlive) {
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
  }
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
