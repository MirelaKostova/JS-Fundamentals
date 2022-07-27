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

  //   console.log(totalCalories);
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
  //   "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
