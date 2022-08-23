function groceryShopping(input) {
  let listOfProducts = input.shift().split("|");
  // console.log(listOfProducts);

  while (input[0] !== "Shop!") {
    let [command, product, newProduct] = input.shift().split("%");

    switch (command) {
      case "Important":
        important(product);
        break;

      case "Add":
        add(product);
        break;

      case "Swap":
        swap(product, newProduct);
        break;

      case "Remove":
        remove(product);
        break;

      case "Reversed":
        reversed(product);
        break;
    }
  }

  // print result
  let n = 1;

  listOfProducts.forEach((product) => {
    console.log(`${n}. ${product}`);
    n++;
  });

  // "Important%{product}"
  function important(product) {
    if (!isProductInList(product)) {
      listOfProducts.unshift(product);
    } else {
      let index = listOfProducts.indexOf(product);
      listOfProducts.splice(index, 1);
      listOfProducts.unshift(product);
    }
  }

  // "Add%{product}"
  function add(product) {
    if (!isProductInList(product)) {
      listOfProducts.push(product);
    } else {
      // console.log(listOfProducts);
      console.log("The product is already in the list.");
    }
  }

  // "Swap%{product}%{product}"
  function swap(product, newProduct) {
    // console.log(listOfProducts);
    // console.log("product--", product);
    // console.log(isProductInList(product));
    // console.log("newProduct--", newProduct);
    // console.log(isProductInList(newProduct));

    if (!isProductInList(product)) {
      console.log(`Product ${product} missing!`);
    }

    if (!isProductInList(newProduct)) {
      console.log(`Product ${newProduct} missing!`);
    }

    if (isProductInList(product) && isProductInList(newProduct)) {
      let firstIndex = listOfProducts.indexOf(product);
      let secondIndex = listOfProducts.indexOf(newProduct);
      // console.log("product--", listOfProducts[firstIndex]);
      // console.log("newProduct--", listOfProducts[secondIndex]);

      listOfProducts[firstIndex] = newProduct;
      listOfProducts[secondIndex] = product;
    }
  }

  // "Remove%{product}"
  function remove(product) {
    if (isProductInList(product)) {
      let index = listOfProducts.indexOf(product);
      listOfProducts.splice(index, 1);
    } else {
      console.log(`Product ${product} isn't in the list.`);
    }
  }

  // "Reversed"
  function reversed(product) {
    listOfProducts.reverse();
  }

  function isProductInList(product) {
    return listOfProducts.includes(product);
  }
}

// groceryShopping([
//   "eggs|milk|bread|fish",
//   "Important%bread",
//   "Swap%eggs%tomato",
//   "Shop!",
// ]);

// console.log("-----------");

// groceryShopping([
//   "apple|cheese|salt|bananas",
//   "Remove%cheese",
//   "Swap%salt%bananas",
//   "Shop!",
// ]);

// console.log("-----------");

groceryShopping([
  "kiwi|paper|coffee",
  "Add%coffee",
  "Important%bread",
  "Shop!",
]);
