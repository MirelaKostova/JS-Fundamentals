function pieceOfPie(input, startEl, endEl) {
  const startIndex = input.indexOf(startEl);
  const endIndex = input.indexOf(endEl) + 1;

  return input.slice(startIndex, endIndex);
}

pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);

console.log("------------");
pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],

  "Pot Pie",
  "Smoked Fish Pie"
);
