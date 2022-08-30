function addAAndRemoveElements(input) {
  let numbers = [];

  input.forEach((command, i) => {
    command === "add" ? numbers.push(i + 1) : numbers.pop();
  });

  numbers.length <= 0 ? console.log("Empty") : console.log(numbers.join("\n"));
}

addAAndRemoveElements(["add", "add", "add", "add"]);
addAAndRemoveElements(["add", "add", "remove", "add", "add"]);
// 1 4 5 \n
addAAndRemoveElements(["remove", "remove", "remove"]);
