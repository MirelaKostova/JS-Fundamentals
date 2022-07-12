function oddOccurrences(sentence) {
  let elements = sentence.split(" ").map((el) => el.toLowerCase());
  let newSentence = new Map();
  //   console.log(elements);

  for (const currEl of elements) {
    // console.log("currEl -->", currEl);

    let wordsCounter = elements.filter((el) => el == currEl).length;
    newSentence.set(currEl, wordsCounter);
    // console.log("wordsCounter -->", wordsCounter);
  }
  //   console.log(newSentence.entries());

  let result = Array.from(newSentence.entries());
  let oddRes = result.filter((el) => el[1] % 2 !== 0);

  let printLine = "";
  for (let [key, value] of oddRes) {
    printLine += key + " ";
  }
  console.log(printLine);
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
