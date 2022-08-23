function secretChat(input) {
  // get message
  let message = input.shift();

  let actions = {
    InsertSpace: insertSpace,
    Reverse: reverse,
    ChangeAll: changeAll,
  };
  //   console.log("before", message);
  while (input[0] !== "Reveal") {
    let [command, param1, param2] = input.shift().split(":|:");

    let action = actions[command];
    action(param1, param2);
  }

  // print message
  console.log(`You have a new text message: ${message}`);

  //InsertSpace
  function insertSpace(index) {
    message = message.substring(0, index) + " " + message.substring(index);
    console.log(message);
  }

  //Reverse
  //   - If the message contains the given substring, cut it out, reverse it and add it at the end of the message.
  function reverse(substring) {
    if (message.includes(substring)) {
      let index = message.indexOf(substring);
      let lastIndex = index + substring.length;

      let strToRemove = message.substring(index, lastIndex);
      let reversedStr = strToRemove.split("").reverse().join("");

      message = message.replace(strToRemove, "") + reversedStr;
      console.log(message);
    } else {
      console.log("error");
    }
  }

  //ChangeAll
  function changeAll(substring, replacement) {
    while (message.includes(substring)) {
      message = message.replace(substring, replacement);
    }
    console.log(message);
  }
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
