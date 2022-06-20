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
  let isConsistRightSymbols = false;

  for (let el of passwordToArr) {
    let isLetter = el.match(/^[A-Za-z]+$/);
    let isNumber = Number(el) === el;

    if (isNumber || isLetter) {
      isConsistRightSymbols = true;
    }
  }
  if (isLongEnough && isInclTwoDigits && isConsistRightSymbols) {
    console.log("Password is valid");
  } else {
    if (!isLongEnough) {
      console.log("Password must be between 6 and 10 characters");
    }

    if (!isInclTwoDigits) {
      console.log("Password must have at least 2 digits");
    }

    if (!isConsistRightSymbols) {
      console.log("Password must consist only of letters and digits");
    }
  }
}

passwordValidator("MyPass1234");
