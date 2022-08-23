function houseParty(guests) {
  let partyList = [];

  for (let el of guests) {
    let responseArr = el.split(" ");
    let name = responseArr[0];

    if (responseArr.length < 4) {
      if (partyList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        partyList.push(name);
      }
    } else {
      if (!partyList.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let index = partyList.indexOf(name);
        partyList.splice(index, 1);
      }
    }
  }

  console.log(partyList.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
