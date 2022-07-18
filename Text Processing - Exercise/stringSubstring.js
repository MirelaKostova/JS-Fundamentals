function stringSubstring(word, text) {
  const wordToLowerCase = word.toLowerCase();
  const textToLowerCase = text.toLowerCase().split(" ");

  if (!textToLowerCase.includes(wordToLowerCase)) {
    console.log(`${word} not found!`);
  } else {
    for (const el of textToLowerCase) {
      if (el === wordToLowerCase) {
        console.log(word);
      }
    }
  }
}

stringSubstring("javascript", "JavaScript is the best programming language");
