function addressBook(dataArray) {
  let addressRegister = {};

  for (const line of dataArray) {
    let [name, address] = line.split(":");
    addressRegister[name] = address;
  }

  let sortedRegister = Object.entries(addressRegister).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const person of sortedRegister) {
    console.log(`${person[0]} -> ${person[1]}`);
  }
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
