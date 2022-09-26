function lowestPricesInCities(input) {
  const registerObj = {};
  input.forEach((line) => {
    let [town, product, price] = line.split(" | ");
    price = Number(price);

    if (!registerObj.hasOwnProperty(product)) {
      registerObj[product] = { town, price };
    } else {
      if (registerObj[product].price > price) {
        registerObj[product].price = price;
        registerObj[product].town = town;
      }
    }
  });

  for (let [currProduct, data] of Object.entries(registerObj)) {
    const { town, price } = data;
    console.log(`${currProduct} -> ${price} (${town})`);
  }
}

lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

// Output:
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
