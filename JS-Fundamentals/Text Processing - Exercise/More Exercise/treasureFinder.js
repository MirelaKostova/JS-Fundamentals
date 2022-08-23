function treasureFinder(input) {
  const key = input.shift().split(" ").map(Number);

  let keyIndex = 0;
  let decryptedMessage = "";

  for (const str of input) {
    if (str === "find") {
      break;
    }

    for (const ch of str) {
      let currChCode = ch.charCodeAt();
      currChCode -= key[keyIndex];
      decryptedMessage += String.fromCharCode(currChCode);
      keyIndex++;

      if (keyIndex >= key.length) {
        // start looping from the beginning of the key
        keyIndex = 0;
      }
    }

    const patternType = /&(.*?)&/g;
    const patternCoordinates = /<(.*?)>/g;

    const type = patternType.exec(decryptedMessage);
    const coordinates = patternCoordinates.exec(decryptedMessage);

    console.log(`Found ${type[1]} at ${coordinates[1]}`);

    keyIndex = 0;
    decryptedMessage = "";
  }
}
// The first message is: "hidden&gold&at<10N70W>"
// The second message is: "thereIs&Silver&atCoordinates<32S43W>

// treasureFinder([
//   "1 2 1 3",
//   "ikegfp'jpne)bv=41P83X@",
//   "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//   "find",
// ]);

treasureFinder([
  "1 4 2 5 3 2 1",
  'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
  "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
  "'stj)>34W68Z@",
  "find",
]);
