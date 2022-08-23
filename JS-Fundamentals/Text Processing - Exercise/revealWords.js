function revealWords(words, text) {
  let wordsToReplace = words.split(", ");
  let textArr = text.split(" ");

  for (const word of wordsToReplace) {
    for (const element of textArr) {
      let matchCondition =
        word.length === element.length && element.includes("*");

      if (matchCondition) {
        text = text.replace(element, word);
      }
    }
  }

  return text;
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
