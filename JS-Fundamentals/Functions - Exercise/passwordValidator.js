function passwordValidator(password) {
  let isLongEnough = longEnough(password);
  let isOnlyLettersAndNumbers = onlyLettersAndNumbers(password);
  let isAtLeastTwoDigits = atLeastTwoDigits(password);
  let passwordToArr = password.split("");

  if (isLongEnough && isOnlyLettersAndNumbers && isAtLeastTwoDigits) {
    console.log("Password is valid");
  }
  if (!isLongEnough) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isOnlyLettersAndNumbers) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isAtLeastTwoDigits) {
    console.log("Password must have at least 2 digits");
  }

  function longEnough(password) {
    return password.length >= 6 && password.length <= 10 ? true : false;
  }

  function onlyLettersAndNumbers(password) {
    return /^[A-Za-z][A-Za-z0-9]*$/.test(password);
  }

  function atLeastTwoDigits(passwordToArr) {
    let digitsCounter = 0;

    for (el of passwordToArr) {
      if (el == Number(el)) {
        digitsCounter++;

        if (digitsCounter >= 2) {
          return true;
        }
      }
    }
  }
}

// passwordValidator("logIn");
// passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
