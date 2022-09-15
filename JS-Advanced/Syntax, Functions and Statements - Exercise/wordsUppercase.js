function wordsUppercase(input) {
  return input.match(/\w+/g).join(", ").toUpperCase();
}

console.log(wordsUppercase("Hi, how are you?"));
// HI, HOW, ARE, YOU

console.log(wordsUppercase("hello"));
// HELLO
