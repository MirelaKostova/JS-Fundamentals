function phoneBook(data) {
  let phoneRegister = {};

  for (let currLine of data) {
    let [name, phoneNumber] = currLine.split(" ");
    phoneRegister[name] = phoneNumber;
  }
  //   console.log(phoneRegister);

  for (const person in phoneRegister) {
    console.log(person, "->", phoneRegister[person]);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
