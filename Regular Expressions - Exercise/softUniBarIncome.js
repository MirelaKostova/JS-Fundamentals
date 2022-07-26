function softUniBarIncome(input) {
  let text = input.join(" ");
  let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(?:.\d+)?)\$/g;

  let income = 0;

  while ((match = pattern.exec(text)) !== null) {
    let customerName = match.groups.customer;
    let product = match.groups.product;
    let count = match.groups.count;
    let price = match.groups.price;

    let totalPrice = price * count;
    income += totalPrice;

    console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}

// softUniBarIncome([
//   "%George%<Croissant>|2|10.3$",

//   "%Peter%<Gum>|1|1.3$",

//   "%Maria%<Cola>|1|2.4$",

//   "end of shift",
// ]);

softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",

  "%Peter%<Gum>1.3$",

  "%Maria%<Cola>|1|2.4",

  "%Valid%<Valid>valid|10|valid20$",

  "end of shift",
]);
