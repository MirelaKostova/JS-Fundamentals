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

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
