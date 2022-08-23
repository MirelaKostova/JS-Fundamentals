function storeProvision(stock, forDelivery) {
  let stockProducts = {};
  let stockL = stock.length;
  let forDeliveryL = forDelivery.length;

  for (let i = 0; i < stockL; i += 2) {
    let product = stock[i];
    stockProducts[product] = Number(stock[i + 1]);
  }

  for (let j = 0; j < forDeliveryL; j += 2) {
    let productFromDelivery = forDelivery[j];

    if (!stockProducts.hasOwnProperty(productFromDelivery)) {
      stockProducts[productFromDelivery] = 0;
    }
    stockProducts[productFromDelivery] += Number(forDelivery[j + 1]);
  }

  for (const stockName in stockProducts) {
    console.log(`${stockName} -> ${stockProducts[stockName]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
