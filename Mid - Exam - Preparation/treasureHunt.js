function treasureHunt(input) {
  let treasureChest = input.shift().split("|");

  while (input[0] !== "Yohoho!") {
    let [command, ...tokens] = input.shift().split(" ");
    if (command === "Loot") {
      loot(tokens);
    } else if (command === "Drop") {
      drop(tokens);
    } else if (command === "Steal") {
      steal(tokens);
    }
  }

  treasureChest = treasureChest.flat();

  // print result
  if (treasureChest.length <= 0) {
    console.log("Failed treasure hunt.");
  } else {
    let averageGain = avgGain(treasureChest);

    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  }

  // index validation
  function isIndexValid(index) {
    return index >= 0 && index < treasureChest.length;
  }

  // Loot
  function loot(tokens) {
    tokens.forEach((item) => {
      if (!treasureChest.includes(item)) {
        treasureChest.unshift(item);
      }
    });
  }

  // Drop
  function drop(index = Number(index)) {
    if (isIndexValid(index)) {
      let itemToMove = treasureChest.splice(index, 1);
      treasureChest.push(itemToMove);
    }
  }

  // Steal
  function steal(count = Number(count)) {
    if (count >= treasureChest.length) {
      console.log(treasureChest.join(", "));
      treasureChest = [];
    } else {
      console.log(treasureChest.slice(-count).join(", "));
      treasureChest = treasureChest.slice(0, -count);
    }
  }

  function avgGain(treasureChest) {
    let sum = 0;
    treasureChest.forEach((el) => (sum += el.length));
    return sum / treasureChest.length;
  }
}

// treasureHunt([
//   "Gold|Silver|Bronze|Medallion|Cup",
//   "Loot Wood Gold Coins",
//   "Loot Silver Pistol",
//   "Drop 3",
//   "Steal 3",
//   "Yohoho!",
// ]);

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
