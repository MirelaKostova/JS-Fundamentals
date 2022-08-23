function replaceRepeatingChars(str) {
  let resString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      resString += str[i];
    }
  }

  console.log(resString);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
