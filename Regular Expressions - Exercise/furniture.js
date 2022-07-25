function furniture(input) {
  let text = input.join(" ");
  let pattern =
    />>(?<furniture>([A-Z][a-z]+|[A-Z]+))<<(?<price>[\d.]+)!(?<quantity>\d+)/g;

  let furnitureArray = [];

  let total = 0;

  while ((valid = pattern.exec(text)) !== null) {
    let furnitureName = valid.groups.furniture;
    let price = Number(valid.groups.price);
    let quantity = Number(valid.groups.quantity);

    furnitureArray.push(furnitureName);

    total += price * quantity;
  }

  console.log("Bought furniture:");

  furnitureArray.forEach((el) => console.log(el));

  console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
