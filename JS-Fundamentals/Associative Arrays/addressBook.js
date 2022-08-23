function addressBook(dataArray) {
  let addressRegister = {};

  // Loop through the array, split it and create variables for each line.
  for (const line of dataArray) {
    let [name, address] = line.split(":");
    addressRegister[name] = address;
  }

  //  Convert object to array by Object.entries and sorted alphabeticall by the person’s name
  let sortedRegister = Object.entries(addressRegister).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  //   Loop through the array and print the full list.
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
