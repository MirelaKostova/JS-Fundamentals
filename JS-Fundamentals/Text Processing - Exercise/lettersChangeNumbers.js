function lettersChangeNumbers(input) {
  let result = 0;
  let strArr = input.trim().split(/\s+/);

  function alphabetPosition(char) {
    return char.toLowerCase().charCodeAt(0) - 96;
  }

  for (const str of strArr) {
    // console.log(strArr);

    let strArr = str.split("");
    let firstChar = strArr.shift();
    let lastChar = strArr.pop();
    let number = Number(strArr.join(""));
    let currResult = number;

    // console.log("firstChar ->", firstChar);
    // console.log("number ->", number);
    // console.log("lastChar ->", lastChar);

    if (firstChar === firstChar.toUpperCase()) {
      currResult /= alphabetPosition(firstChar);
    } else {
      currResult *= alphabetPosition(firstChar);
    }

    if (lastChar === lastChar.toUpperCase()) {
      currResult -= alphabetPosition(lastChar);
    } else {
      currResult += alphabetPosition(lastChar);
    }

    result += currResult;
  }

  console.log(result.toFixed(2));
}

lettersChangeNumbers("A12b   s17G");
