function catalogue(products) {
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  let catalogueList = [];

  for (const el of products) {
    let [name, price] = el.split(" : ");
    let currProduct = new Product(name, price);
    catalogueList.push(currProduct);
  }

  let sortedCatalogue = catalogueList.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  let prevProductName = "";

  for (const product of sortedCatalogue) {
    if (product.name[0] !== prevProductName[0]) {
      console.log(product.name[0]);
      prevProductName = product.name;
    }

    console.log(`${product.name}: ${product.price}`);
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
