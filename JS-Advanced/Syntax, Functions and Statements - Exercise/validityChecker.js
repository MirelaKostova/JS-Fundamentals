function validityChecker(x1, y1, x2, y2) {
  let first = Math.sqrt(x1 ** 2 + y1 ** 2);
  let second = Math.sqrt(x2 ** 2 + y2 ** 2);
  let third = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(first)}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(second)}`);
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(third)}`);

  function isValid(distance) {
    if (Number.isInteger(distance)) {
      return "valid";
    } else {
      return "invalid";
    }
  }
}

validityChecker(3, 0, 0, 4);
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid
