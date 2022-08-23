function mirrorWords(input) {
  let pattern = /(#|@)(?<word>[A-Za-z]{3,})\1\1(?<mirrorWord>[A-Za-z]+)\1/g;
  let match = pattern.exec(input);
  let matchCounter = 0;
  //   let mirrorWordsArr = [];
  let pairs = new Map();
  let mirrors = new Map();

  while (match) {
    let word = match.groups.word;
    let mirrorWord = match.groups.mirrorWord;

    let reversedWord = mirrorWord.split("").reverse().join("");
    matchCounter++;
    pairs.set(word, mirrorWord);

    if (word === reversedWord) {
      mirrors.set(word, mirrorWord);
    }
    match = pattern.exec(input);
  }

  if (pairs.size > 0) {
    console.log(`${pairs.size} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  if (mirrors.size > 0) {
    //
    console.log("The mirror words are:");
    let mirrorsArr = Array.from(mirrors);

    mirrorsArr = mirrorsArr.map((el) => el.join(" <=> "));
    console.log(mirrorsArr.join(", "));
  } else {
    console.log("No mirror words!");
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
