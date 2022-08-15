function solve(input) {
  let list = {};

  while (input[0] !== "Go Shopping") {
    let [command, store, products] = input.shift().split("->");

    switch (command) {
      case "Add":
        add(store, products);
        break;

      case "Important":
        important(store, products);
        break;

      case "Remove":
        remove(store);
        break;
    }
  }

  for (let [store, products] of Object.entries(list)) {
    console.log(`${store}:`);
    // console.log(products);
    products.products.forEach((product) => console.log(` - ${product}`));
  }

  // Add->{Store}->{Item},{Item1},…{ItemN}"
  function add(store, products) {
    if (!list.hasOwnProperty(store)) {
      list[store] = {
        products: [],
        hasImportantProduct: false,
      };
    }
    let newProducts = products.split(",");
    newProducts.forEach((item) => {
      if (!isItemExist(item)) {
        list[store].products.push(item);
      }
    });

    // if (!list.hasOwnProperty(store)) {
    //   list[store] = {
    //     products: products.split(","),
    //     hasImportantProduct: false,
    //   };
    // } else {
    //   let currProducts = products.split(",");

    //   list[store].products = list[store].products
    //     .concat(currProducts)
    //     .filter((item, i, a) => item[i] !== item[i + 1]);
    // }
  }

  // Important->{Store}->{Item}"
  function important(store, item) {
    if (!list.hasOwnProperty(store)) {
      list[store] = {
        products: [],
        hasImportantProduct: true,
      };

      //   list[store].push(item);
    }

    // if (!list[store].products.includes(item)) {

    // }

    if (!isItemExist(item)) {
      list[store].products.unshift(item);
      list[store].hasImportantProduct = true;
    }
    // else if (list.includes(item)) {
    // no matter in which store, do not add it
    // }
  }

  // Remove->{Store}
  function remove(store) {
    if (list.hasOwnProperty(store)) {
      if (!list[store].hasImportantProduct) {
        delete list[store];
      }
    }
  }

  function isItemExist(item) {
    let isExists = false;
    let allProducts = Object.values(list);
    allProducts.forEach((el) => {
      if (el.products.includes(item)) {
        isExists = true;
      }
    });
    return isExists;
  }
}

solve([
  "Add->Grocery->Dried-fruit,Nuts,Lemons",
  "Add->Market->Nuts,Juice",
  "Important->Market->Snack",
  "Remove->Market",
  "Go Shopping",
]);

console.log("---------------");

solve([
  "Add->Peak->Batteries,Umbrella",
  "Add->Groceries->Water,Juice,Food",
  "Add->Peak->Tent",
  "Important->Groceries->Batteries",
  "Remove->Store",
  "Go Shopping",
]);

console.log("---------------");

solve([
  "Add->Peak->Batteries,Umbrella",
  "Add->Groceries->Water,Juice,Food",
  "Add->Peak->Water",
  "Go Shopping",
]);
