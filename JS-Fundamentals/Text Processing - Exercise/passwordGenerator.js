function passwordGenerator(input) {
  let password = input[0] + input[1];
  let thirdWord = input[2].toUpperCase();
  let index = 0;

  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < password.length; i++) {
    let currChar = password[i];
    let charToReplace = thirdWord[index];

    if (vowels.includes(currChar)) {
      password = password.replace(currChar, charToReplace);
      index++;

      if (index >= thirdWord.length) {
        index = 0;
      }
    }
  }

  let reversedPass = password.split("").reverse().join("");

  console.log(`Your generated password is ${reversedPass}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]); // sElbGtNgAvRtOhEGzzNpAvRlO
