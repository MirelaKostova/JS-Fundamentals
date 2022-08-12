function adAstra(input) {
  let pattern =
    /([#\|])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

  let totalCalories = 0;
  let listOfProducts = [];
  let valid = pattern.exec(input);

  while (valid !== null) {
    let { itemName, expirationDate, calories } = valid.groups;
    calories = Number(calories);

    listOfProducts.push({ itemName, expirationDate, calories });
    totalCalories += calories;

    valid = pattern.exec(input);
  }

  let days = Math.floor(totalCalories / 2000);
  // Print result
  console.log(`You have food to last you for: ${days} days!`);

  listOfProducts.forEach((product) => {
    console.log(
      `Item: ${product.itemName}, Best before: ${product.expirationDate}, Nutrition: ${product.calories}`
    );
  });
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);

console.log("------------");
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);

/*
function adAstra(input) {
  let pattern =
    /(#|\|)(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>([0-9][1-9]\/)[0-9][0-9]\/[0-9][0-9])\1(?<calories>[0-9]+)\1/g;

  let totalCalories = 0;

  let listOfItems = [];
  let valid = pattern.exec(input);

  while (valid !== null) {
    let currItem = {
      item: valid.groups.itemName,
      expirationDate: valid.groups.expirationDate,
      calories: Number(valid.groups.calories),
    };

    listOfItems.push(currItem);
    totalCalories += currItem.calories;

    valid = pattern.exec(input);
  }

  let days = totalCalories / 2000;

  console.log(`You have food to last you for: ${Math.floor(days)} days!`);

  listOfItems.map((el) =>
    console.log(
      `Item: ${el.item}, Best before: ${el.expirationDate}, Nutrition: ${el.calories}`
    )
  );
}


// adAstra([
//   "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
// ]);

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
*/
