function passwordValidator(input) {
  let password = input.shift();
  //   console.log(password);

  let matchLength = password.match(/\w{8,}/g);
  let matchNonChar = password.match(/[^\W\|_]/g);
  let matchUpperCase = password.match(/[A-Z]/g);
  let matchLowerCase = password.match(/[a-z]/g);
  let matchDigit = password.match(/\d/g);

  while (input[0] !== "Complete") {
    let [command, param1, param2] = input.shift().split(" ");

    switch (command) {
      case "Make Upper":
        upper(param1);
        break;

      case "Make Lower":
        lower(param1);
        break;

      case "Insert":
        insert(param1, param2);
        break;

      case "Replace":
        replace(param1, param2);
        break;

      case "Validation":
        validation();
        break;
    }
  }

  // Make Upper
  function upper(index) {
    index = Number(index);

    if (isIndexValid(index)) {
      let letter = password[index];

      password = password.replace(letter, letter.toUpperCase());
      console.log(password);
    }
  }

  // Make Lower
  function lower(index) {
    index = Number(index);

    if (isIndexValid(index)) {
      let letter = password[index];

      password = password.replace(letter, letter.toLowerCase());
      console.log(password);
    }
  }

  // Insert
  function insert(index, char) {
    index = Number(index);

    if (isIndexValid(index)) {
      password =
        password.substring(0, index) + char + password.substring(index);
      console.log(password);
    }
  }

  // Replace
  function replace(char, value) {
    value = Number(value);

    if (password.includes(char)) {
      let asciValue = password.charCodeAt(char);
      let sum = asciValue + value;
      let newSymbol = String.fromCharCode(sum);

      password = password.split(char).join(newSymbol);
      console.log(password);
    }
  }

  // Index Validation
  function isIndexValid(index) {
    return index >= 0 && index < password.length;
  }

  // Passsword Validation
  function validation() {
    if (!matchLength) {
      console.log(`Password must be at least 8 characters long!`);
    }

    if (!matchNonChar) {
      console.log(`Password must consist only of letters, digits and _!`);
    }

    if (!matchUpperCase) {
      console.log(`Password must consist at least one uppercase letter!`);
    }

    if (!matchLowerCase) {
      console.log(`Password must consist at least one lowercase letter!`);
    }

    if (!matchDigit) {
      console.log(`Password must consist at least one digit!`);
    }
  }
}

passwordValidator([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
