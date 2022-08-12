function theImitationGame(input) {
  let message = input.shift();

  while (input[0] !== "Decode") {
    let [command, ...params] = input.shift().split("|");

    switch (command) {
      case "Move":
        move(params);
        break;

      case "Insert":
        insert(params);
        break;

      case "ChangeAll":
        changeAll(params);
        break;
    }
  }

  //print result
  console.log(`The decrypted message is: ${message}`);

  // "Move {number of letters}":
  function move(number) {
    number = Number(number);

    let firstLetters = message.substring(0, number);
    message = message.substring(number) + firstLetters;
  }

  // "Insert {index} {value}":
  function insert([index, value]) {
    index = Number(index);
    message = message.substring(0, index) + value + message.substring(index);
  }

  // ChangeAll {substring} {replacement}":
  function changeAll([substring, replacement]) {
    // let regex = new RegExp(substring, "g");
    // message = message.replace(regex, replacement);

    message = message.split(substring).join(replacement);
    // while (message.includes(substring)) {
    //   message = message.replace(substring, replacement);
    // }
  }
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

console.log("------------");
theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);

/*
function theImitationGame(input) {
  // get encrypted message
  let message = input.shift();

  let actions = {
    Move: move,
    Insert: insert,
    ChangeAll: changeAll,
  };

  //parse input
  //  - until the "Decode" command
  while (input[0] !== "Decode") {
    let tokens = input.shift();
    let [command, par1, par2] = tokens.split("|");
    let action = actions[command];

    if (par2 == undefined) {
      action(par1);
    } else {
      action(par1, par2);
    }
  }

  //print the message
  console.log(`The decrypted message is: ${message}`);

  function move(n) {
    let firstElements = message.substring(0, n);
    let lastElements = message.substring(n);
    message = lastElements + firstElements;
  }

  function insert(index, value) {
    message = message.substring(0, index) + value + message.substring(index);
  }

  function changeAll(substring, replacement) {
    // let pattern = new RegExp(substring, "g");
    // message = message.replace(pattern, replacement);
    while (message.includes(substring)) {
      message = message.replace(substring, replacement);
    }
  }
}
*/
