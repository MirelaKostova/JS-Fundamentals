function serializeString(input) {
  let charObj = {};
  let string = input[0];

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];

    if (!charObj.hasOwnProperty(currChar)) {
      charObj[currChar] = [];
    }

    charObj[currChar].push(i);
  }

  for (const ch in charObj) {
    console.log(`${ch}:${charObj[ch].join("/")}`);
  }
}

serializeString(["abababa"]);
