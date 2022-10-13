function listProcessor(arr) {
  let collection = [];

  const actions = {
    add: (string) => collection.push(string),
    remove: (string) => (collection = collection.filter((x) => x !== string)),
    print: () => console.log(collection.join(",")),
  };

  arr.forEach((element) => {
    const [command, string] = element.split(" ");
    actions[command](string);
  });
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
