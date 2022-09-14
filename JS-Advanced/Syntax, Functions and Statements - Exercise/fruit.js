function fruit(fruitType, weight, pricePerKg) {
  let weightInKg = weight / 1000;
  console.log(
    `I need $${(pricePerKg * weightInKg).toFixed(
      2
    )} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`
  );
}

fruit("orange", 2500, 1.8);
//I need $4.50 to buy 2.50 kilograms orange.

fruit("apple", 1563, 2.35);
// I need $3.67 to buy 1.56 kilograms apple.
