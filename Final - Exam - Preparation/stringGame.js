function stringGame(input) {
  let string = input.shift();

  while (input[0] !== "Done") {
    let [command, param1, param2] = input.shift().split(" ");

    switch (command) {
      case "Change":
        change(param1, param2);
        break;

      case "Includes":
        includes(param1);
        break;

      case "End":
        end(param1);
        break;

      case "Uppercase":
        uppercase();
        break;

      case "FindIndex":
        findindex(param1);
        break;

      case "Cut":
        cut(param1, param2);
        break;
    }
  }

  //Change
  function change(char, replacement) {
    const pattern = new RegExp(char, "g");
    string = string.replace(pattern, replacement);
    console.log(string);
  }

  //Includes
  function includes(substring) {
    string.includes(substring) ? console.log("True") : console.log("False");
  }

  //End
  function end(substring) {
    let index = substring.length;
    let lastStringPiece = string.substring(index);

    // str.endsWith(substring) ? true : false
    lastStringPiece === substring ? console.log("True") : console.log("False");
  }

  //Uppercase
  function uppercase() {
    string = string.toUpperCase();
    console.log(string);
  }

  //FindIndex
  function findindex(char) {
    let index = string.indexOf(char);
    console.log(index);
  }

  //Cut
  function cut(startIndex, count) {
    startIndex = Number(startIndex);
    count = Number(count);

    let endIndex = startIndex + count;
    string = string.substring(startIndex, endIndex);
    console.log(string);
  }
}

console.log("--------------------------");
stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);

/*
  //This is my string!//
  True
  False
  //THIS IS MY STRING!//
  4
  S IS
*/

console.log("--------------------------");
stringGame([
  "*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done",
]);
