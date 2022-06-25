function shoppingList(arr) {
  let list = arr.shift().split("!");
  let index = 0;
  console.log(arr);
  console.log(arr.length);
  while (arr[index] !== "Go Shopping!" || index < arr.length - 1) {
    console.log("index", index);
    let [command, item, newItem] = arr[index].split(" ");

    switch (command) {
      case "Urgent":
        if (!list.includes(item)) {
          list.unshift(item);
        } else {
          //   continue;
        }
        break;

      case "Unnecessary":
        if (list.includes(item)) {
          let itemToRemove = list.indexOf(item);
          list.slice(itemToRemove);
          console.log(list.indexOf(item));
        } else {
          //   continue;
        }
        break;

      case "Correct":
        if (list.includes(item)) {
          let itemToChage = list.indexOf(item);

          list.splice(itemToChage, 1, newItem);
          //   console.log(itemToChage);
        } else {
          //   continue;
        }
        break;

      case "Rearrange":
        if (list.includes(item)) {
          let grocery = list.slice(list.indexOf(item));
          list.push(grocery);
        } else {
          //   continue;
        }
        break;
    }

    index++;
  }

  console.log(list.join());
}

// Tomatoes', 'Potatoes', 'Bread'
// shoppingList([
//   "Tomatoes!Potatoes!Bread",
//   "Unnecessary Milk",
//   "Urgent Tomatoes",
//   "Go Shopping!",
// ]);

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
