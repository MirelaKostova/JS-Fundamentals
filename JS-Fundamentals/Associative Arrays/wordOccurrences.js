function wordOccurrences(data) {
  let wordRegister = new Map();

  for (const word of data) {
    const wordsCounter = data.filter((el) => el === word).length;

    wordRegister.set(word, wordsCounter);
  }

  let sorted = Array.from(wordRegister.entries()).sort((a, b) => b[1] - a[1]);

  for (const el of sorted) {
    console.log(`${el[0]} -> ${el[1]} times`);
  }
}

// wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
