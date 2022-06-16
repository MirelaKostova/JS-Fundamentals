function reverseInPlace(str) {
  for (let i = 0, k = str.length - 1; i < str.length / 2; i++, k--) {
    let temp = str[i];
    str[i] = str[k];
    str[k] = temp;
  }
  console.log(str.join(" "));
}
