function emojiDetector(text) {
  let coolThreshold = text
    .join("")
    .replace(/\D/g, "")
    .split("")
    .map(Number)
    .reduce((a, b) => a * b);

  let pattern = /(::|\*\*)(?<emoji>[A-Z][A-Za-z]{1,}[a-z])\1/g;
  let emojies = new Map();

  while ((valid = pattern.exec(text)) !== null) {
    let emoji = valid.groups.emoji;

    let threshold = 0;
    for (let char of emoji) {
      threshold += char.charCodeAt();
    }

    let emojiObj = {
      emojiWithSymbols: valid[0],
      isCool: threshold > coolThreshold ? "cool" : "not cool",
    };
    emojies.set(emoji, emojiObj);
  }

  //  print result
  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${emojies.size} emojis found in the text. The cool ones are:`);

  for (let [key, value] of emojies) {
    if (value.isCool === "cool") {
      console.log(value.emojiWithSymbols);
    }
  }
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
