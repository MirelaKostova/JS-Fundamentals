function passwordValidator(password) {
  let passwordToArr = password.split("");

  // "Password must be between 6 and 10 characters"
  let isLongEnough =
    passwordToArr.length >= 6 && passwordToArr.length <= 10 ? true : false;

  // "Password must have at least 2 digits"
  let isInclTwoDigits = false;
  let digitsCounter = 0;

  for (el of passwordToArr) {
    if (el == Number(el)) {
      digitsCounter++;

      if (digitsCounter >= 2) {
        isInclTwoDigits = true;
        break;
      }
    }
  }

  // "Password must consist only of letters and digits"
  function onlyLettersAndNumbers(password) {
    return /^[A-Za-z0-9]*$/.test(password);
  }

  if (isLongEnough && isInclTwoDigits && onlyLettersAndNumbers) {
    console.log("Password is valid");
  } else {
    if (!isLongEnough) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (!onlyLettersAndNumbers(password)) {
      console.log("Password must consist only of letters and digits");
    }

    if (!isInclTwoDigits) {
      console.log("Password must have at least 2 digits");
    }
  }
}

passwordValidator("Pa$s$s");
