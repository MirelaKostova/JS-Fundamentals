function sortAnArrayBy2Criteria(input) {
  return input.sort(compareFn).join("\n");

  function compareFn(prev, curr) {
    if (prev.length === curr.length) {
      return prev.localeCompare(curr);
    }
    return prev.length - curr.length;
  }
}

console.log(sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]));
// beta
// alpha
// gamma

console.log(
  sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
);
// Jack
// Isacc
// George
// Theodor
// Harrison
