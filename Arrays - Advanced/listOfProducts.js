function listOfProducts(products) {
  let sortedByName = products.sort();

  for (let i = 0; i < sortedByName.length; i++) {
    console.log(`${i + 1}.${sortedByName[i]}`);
  }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
