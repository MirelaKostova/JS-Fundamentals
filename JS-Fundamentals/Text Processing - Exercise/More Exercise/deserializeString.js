function deserializeString(input) {
  let result = [];

  for (const el of input) {
    if (el !== "end") {
      let [ch, indexes] = el.split(":");
      indexes = indexes.split("/").map(Number);
      for (const i of indexes) {
        result[i] = ch;
      }
    } else {
      break;
    }
  }

  console.log(result.join(""));
}

deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
