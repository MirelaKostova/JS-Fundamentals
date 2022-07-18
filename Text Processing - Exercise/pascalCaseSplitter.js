function pascalCaseSplitter(string) {
  let result = [];
  let word = string[0];

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result.push(word);
      word = "";
    }

    word += string[i];
  }
  result.push(word);
  console.log(result.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
