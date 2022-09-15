function cookingByNumbers(...params) {
  let operations = [...params];
  let result = Number(operations.shift());

  for (const el of operations) {
    switch (el) {
      case "chop":
        result /= 2;
        break;

      case "dice":
        result = Math.sqrt(result);
        break;

      case "spice":
        result += 1;
        break;

      case "bake":
        result *= 3;
        break;

      case "fillet":
        result -= result * 0.2;
        break;
    }

    console.log(result);
  }
}

cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");

console.log("-------------");
cookingByNumbers(
  "9",
  "dice",
  "spice",
  "chop",
  "bake",

  "fillet"
);
