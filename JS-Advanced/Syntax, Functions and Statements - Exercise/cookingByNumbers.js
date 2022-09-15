function cookingByNumbers(result, ...params) {
  result = Number(result);

  for (const action of params) {
    manipulator(action);
  }

  function manipulator(action) {
    switch (action) {
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
