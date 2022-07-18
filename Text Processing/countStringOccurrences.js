function countStringOccurrences(text, word) {
  let textArr = text.split(" ");
  let counter = 0;

  textArr.forEach((searchedWord) => {
    if (searchedWord === word) {
      counter++;
    }
  });

  console.log(counter);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
