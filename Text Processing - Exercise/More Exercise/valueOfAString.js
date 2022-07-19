function valueOfAString(input) {
  const string = input[0];
  const command = input[1];
  let sum = 0;

  function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }

  //   console.log(string);

  for (let char of string) {
    // check if char is a letter
    if (onlyLetters(char)) {
      let charCode = char.charCodeAt(0);

      // check if UpperCase or LowerCase
      if (command === "UPPERCASE") {
        if (charCode >= 65 && charCode <= 90) {
          sum += charCode;
        }
      } else {
        if (charCode >= 97 && charCode <= 122) {
          sum += charCode;
        }
      }
    }
  }

  console.log(`The total sum is: ${sum}`);
}

valueOfAString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
