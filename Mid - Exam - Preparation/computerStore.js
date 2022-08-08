function computerStore(input) {
  let prices = input.map(Number);
  let priceWithoutTaxes = 0;

  //price before taxes
  for (let currPrice of prices) {
    if (!isNaN(currPrice)) {
      if (currPrice > 0) {
        priceWithoutTaxes += currPrice;
      } else {
        console.log("Invalid price!");
      }
    }
  }

  //price after taxes
  let taxes = priceWithoutTaxes * 0.2;
  let totalPrice = priceWithoutTaxes + taxes;
  let isValid = totalPrice > 0;

  //discount
  let typeOfCustomer = input.pop();
  if (typeOfCustomer === "special") {
    // 10% discount
    totalPrice *= 0.9;
  }

  //print result
  if (isValid) {
    console.log(
      `Congratulations you've just bought a new computer!\n` +
        `Price without taxes: ${priceWithoutTaxes.toFixed(2)}$\n` +
        `Taxes: ${taxes.toFixed(2)}$\n` +
        `-----------\n` +
        `Total price: ${totalPrice.toFixed(2)}$`
    );
  } else {
    console.log("Invalid order!");
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
