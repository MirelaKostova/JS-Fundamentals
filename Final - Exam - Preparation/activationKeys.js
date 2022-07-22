function activationKeys(input) {
  //get raw key
  let activationKey = input.shift();
  //   console.log(activationKey);

  let actions = {
    Contains: contains,
    Flip: flip,
    Slice: slice,
  };

  // parse input until the 'Generate' command
  //  - instructions, split by ">>>"
  while (input[0] !== "Generate") {
    let [command, param1, param2, param3] = input.shift().split(">>>");
    // console.log(command, "-", param1, "-", param2, "-", param3);
    let action = actions[command];
    action(param1, param2, param3);
  }

  // Contains
  function contains(substring) {
    if (activationKey.includes(substring)) {
      console.log(`${activationKey} contains ${substring}`);
    } else {
      console.log(`Substring not found!`);
    }
  }

  // Flip
  function flip(type, startIndex, endIndex) {
    let strToChange = activationKey.substring(startIndex, endIndex);

    if (type === "Upper") {
      activationKey =
        activationKey.substring(0, startIndex) +
        strToChange.toUpperCase() +
        activationKey.substring(endIndex);
    } else {
      activationKey =
        activationKey.substring(0, startIndex) +
        strToChange.toLowerCase() +
        activationKey.substring(endIndex);
    }

    console.log(activationKey);
  }

  // Slice
  function slice(startIndex, endIndex) {
    let strToRemove = activationKey.substring(startIndex, endIndex);
    activationKey = activationKey.replace(strToRemove, "");
    console.log(activationKey);
  }

  // print result
  console.log(`Your activation key is: ${activationKey}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
