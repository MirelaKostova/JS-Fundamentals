function charactersInRange(ch1, ch2) {
  let startChar = Math.min(ch1.charCodeAt(0), ch2.charCodeAt(0));
  let endChar = Math.max(ch1.charCodeAt(0), ch2.charCodeAt(0));

  let charsInRange = [];

  for (let index = startChar + 1; index < endChar; index++) {
    let currentChar = String.fromCharCode(index);
    charsInRange.push(currentChar);
  }

  console.log(charsInRange.join(" "));
}

charactersInRange("a", "d");
charactersInRange("#", ":");
