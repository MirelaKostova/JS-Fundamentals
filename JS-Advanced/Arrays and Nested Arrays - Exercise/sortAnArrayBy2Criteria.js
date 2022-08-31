function sortAnArrayBy2Criteria(input) {
  input
    .map((el) => el.toLowerCase())
    .sort((prev, curr) => compareFn(prev, curr));

  // primary criteria: by a length in ascending order
  // second criteria: by alphabetical value in ascending order

  console.log(input);

  function compareFn(prev, curr) {
    if (prev.length > curr.length) {
      return -1;
    } else if (prev.length < curr.length) {
      return 1;
    }

    // if()
    {
      curr.localeCompare(prev);
    }
  }
}

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
// beta
// alpha
// gamma

sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
// Jack
// Isacc
// George
// Theodor
// Harrison
