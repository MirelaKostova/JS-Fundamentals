function cardGame(array) {
  let players = new Map();

  let power = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let type = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  for (const line of array) {
    let [name, deck] = line.split(": ");
    let cards = deck.split(", ");
    // console.log("name -->", name);
    // console.log("cards -->", cards);

    if (!players.has(name)) {
      players.set(name, new Set());
    }

    for (const currCard of cards) {
      players.get(name).add(currCard);
    }
  }

  for (const [key, value] of players) {
    let sum = 0;

    for (const card of value) {
      let cardInfo = card.split("");
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join("");

      let cardPowerValue = power[cardPower];
      let cardTypeValue = type[cardType];

      sum += cardPowerValue * cardTypeValue;
    }
    console.log(`${key}: ${sum}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
