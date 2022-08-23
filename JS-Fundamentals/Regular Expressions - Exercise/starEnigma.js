function starEnigma(input) {
  let n = input.shift();

  let attacked = [];
  let destroyed = [];

  //patterns
  let pattern = /[star]/gi;
  let patternForDecrypted =
    /@(?<planet>[A-Za-z]+)[^@!:>-]*:(?:\d+)[^@!:>-]*!(?<attackType>[AD])![^@!:>-]*->(?:\d+)/;

  // key
  for (let message of input) {
    let encrypted = message.match(pattern);
    let key = encrypted ? encrypted.length : 0;

    //decrypt the messages
    let decrypted = "";

    for (let currChar of message) {
      let newASCIIvalue = currChar.charCodeAt() - key;
      decrypted += String.fromCharCode(newASCIIvalue);
    }

    let valid = patternForDecrypted.exec(decrypted);

    if (valid) {
      let planetName = valid.groups.planet;
      let attackType = valid.groups.attackType;

      if (attackType === "A") {
        attacked.push(planetName);
      } else {
        destroyed.push(planetName);
      }
    }
  }

  //sorted alphabetically
  let sortedAttacked = attacked.sort((a, b) => a.localeCompare(b));
  let sortedDestroyed = destroyed.sort((a, b) => a.localeCompare(b));

  //print
  console.log(`Attacked planets: ${sortedAttacked.length}`);
  sortedAttacked.forEach((planet) => {
    console.log(`-> ${planet}`);
  });

  console.log(`Destroyed planets: ${sortedDestroyed.length}`);
  sortedDestroyed.forEach((planet) => {
    console.log(`-> ${planet}`);
  });
}

starEnigma([
  "3",

  "tt(''DGsvywgerx>6444444444%H%1B9444",

  "GQhrr|A977777(H(TTTT",

  "EHfsytsnhf?8555&I&2C9555SR",
]);
