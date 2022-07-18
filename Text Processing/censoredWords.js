function censoredWords(text, word) {
  return text.split(`${word}`).join(`${"*".repeat(word.length)}`);
}

censoredWords(
  "A small sentence with some words",

  "small"
);
