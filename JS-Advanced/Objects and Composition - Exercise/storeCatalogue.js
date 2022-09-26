function storeCatalogue(input) {
  let sortedInputDate = input.sort((a, b) => a.localeCompare(b));
  let register = {};

  sortedInputDate.forEach((line) => {
    let [productName, productPrice] = line.split(" : ");
    productPrice = Number(productPrice);

    let initialLetter = productName[0];

    if (!register.hasOwnProperty(initialLetter)) {
      register[initialLetter] = {};
    }
    register[initialLetter][productName] = productPrice;
  });

  for (const [letter, list] of Object.entries(register)) {
    console.log(letter);

    Object.entries(list).forEach((list) => {
      let [name, price] = list;
      console.log(` ${name}: ${price}`);
    });
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
