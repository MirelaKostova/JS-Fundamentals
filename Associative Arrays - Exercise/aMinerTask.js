function aMinerTask(input) {
  let collection = {};
  //   console.log("input ->", input);

  for (let i = 0; i < input.length; i++) {
    let resource = input[i];
    let quantity = Number(input[++i]);

    // console.log("resource ->", resource);
    // console.log("quantity->", quantity);

    if (!collection.hasOwnProperty(resource)) {
      collection[resource] = quantity;
    } else {
      collection[resource] += quantity;
    }
  }

  for (const resource in collection) {
    console.log(resource, "->", collection[resource]);
  }
}

aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
