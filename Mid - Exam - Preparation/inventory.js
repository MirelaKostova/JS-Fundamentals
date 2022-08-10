function inventory(input) {
  let collection = input.shift().split(", ");

  while (input[0] !== "Craft!") {
    let [command, item] = input.shift().split(" - ");

    if (command === "Collect") {
      collect(item);
    } else if (command === "Drop") {
      drop(item);
    } else if (command === "Combine Items") {
      combine(item);
    } else if (command === "Renew") {
      renew(item);
    }
  }

  console.log(collection.join(", "));

  // Collect
  function collect(item) {
    if (!collection.includes(item)) {
      collection.push(item);
    }
  }

  // Drop
  function drop(item) {
    if (collection.includes(item)) {
      let index = collection.indexOf(item);
      collection.splice(index, 1);
    }
  }

  // Combine Items
  function combine(items) {
    let [oldItem, newItem] = items.split(":");

    if (collection.includes(oldItem)) {
      let index = collection.indexOf(oldItem);
      //   console.log(index);
      collection.splice(index + 1, 0, newItem);
    }
  }

  // Renew
  function renew(item) {
    if (collection.includes(item)) {
      let index = collection.indexOf(item);
      let itemToAdd = collection.slice(index, 1);

      collection.splice(index, 1);
      collection.push(itemToAdd);
    }
  }
}

// inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);

inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
