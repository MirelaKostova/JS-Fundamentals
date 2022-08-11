function shoppingList(input) {
  let list = input.shift().split("!");
  // console.log(list);
  while (input[0] !== "Go Shopping!") {
    let [command, param1, param2] = input.shift().split(" ");

    if (command === "Urgent") {
      urgent(param1);
    } else if (command === "Unnecessary") {
      unnecessary(param1);
    } else if (command === "Correct") {
      correct(param1, param2);
    } else if (command === "Rearrange") {
      rearrange(param1);
    }
  }

  console.log(list.join(", "));

  function urgent(item) {
    if (!isExistsInTheList(item)) {
      list.unshift(item);
    }
  }

  function unnecessary(item) {
    if (isExistsInTheList(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  function correct(oldItem, newItem) {
    if (isExistsInTheList(oldItem)) {
      let index = list.indexOf(oldItem);
      list.splice(index, 1, newItem);
    }
  }

  function rearrange(item) {
    if (isExistsInTheList(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      list.push(item);
    }
  }

  function isExistsInTheList(item) {
    return list.includes(item);
  }
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

console.log("------------------------");

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
