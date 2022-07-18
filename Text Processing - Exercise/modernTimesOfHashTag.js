function modernTimesOfHashTag(str) {
  const strArr = str.split(" ");

  for (const el of strArr) {
    let isMatching = el.includes("#") && el.length > 1;

    if (isMatching) {
      console.log(el.substring(1, el.length));
    }
  }
}

modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
