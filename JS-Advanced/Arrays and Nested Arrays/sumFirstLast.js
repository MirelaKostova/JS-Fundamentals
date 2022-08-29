function sumFirstLast(input) {
  return Number(input.shift()) + Number(input.pop());
}

sumFirstLast(["20", "30", "40"]);
sumFirstLast(["5", "10"]);
