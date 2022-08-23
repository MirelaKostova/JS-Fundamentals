function storage(data) {
  //Create a new Map():
  let updatedStorage = new Map();

  // Loop through the array (data), split it and create variables for each line.
  for (const line of data) {
    let token = line.split(" ");
    let product = token[0];
    let quantity = Number(token[1]);

    // First, checking if the map does NOT have the product.If so, set it to the given quantity.
    // Otherwise, get() the existing quantity. Add the new quantity,
    //  and set() the product’s quantity to the new one - newQuantity.

    if (!updatedStorage.has(product)) {
      updatedStorage.set(product, quantity);
    } else {
      let currQuantity = updatedStorage.get(product);
      let newQuantity = (currQuantity += quantity);
      updatedStorage.set(product, newQuantity);
    }
  }

  // An array of 2 elements (the key and the value)
  for (let [key, value] of updatedStorage.entries()) {
    console.log(key, "->", value);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
