function melrahShake(input) {
  let [str, pattern] = input;

  while (pattern.length > 0) {
    let firstMatch = str.indexOf(pattern);
    let lastMatch = str.lastIndexOf(pattern);

    if (firstMatch == -1 || lastMatch == -1) {
      break;
    }

    //remove first match
    str = str.split("");
    str.splice(firstMatch, pattern.length);
    str = str.join("");

    //remove last match
    lastMatch = str.lastIndexOf(pattern);
    str = str.split("");
    str.splice(lastMatch, pattern.length);
    str = str.join("");

    //   console.log(str);
    console.log("Shaked it.");

    //new pattern
    let index = Math.floor(pattern.length / 2);
    pattern = pattern.split("");
    pattern.splice(index, 1);
    pattern = pattern.join("");
    //   console.log(pattern);
  }

  console.log("No shake.");
  console.log(str);
}

melrahShake(["astalavista baby", "sta"]);
