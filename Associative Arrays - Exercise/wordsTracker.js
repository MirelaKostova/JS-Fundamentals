function wordsTracker(array) {
  let searchingWords = {};
  let firstElement = array.shift().split(" ");

  for (let word of firstElement) {
    searchingWords[word] = 0;
  }

  for (const currWord in searchingWords) {
    const wordCounter = array.filter((el) => el === currWord).length;
    searchingWords[currWord] = wordCounter;
  }

  let sorted = Object.entries(searchingWords).sort((a, b) => b[1] - a[1]);

  sorted.forEach((el) => {
    console.log(el[0], "-", el[1]);
  });
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
