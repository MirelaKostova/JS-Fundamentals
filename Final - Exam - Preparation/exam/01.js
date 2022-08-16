function warriorsQuest(input) {
  let string = input.shift();

  // until 'For Azeroth'
  while (input[0] !== "For Azeroth") {
    let [command, param1, param2, param3] = input.shift().split(" ");

    switch (command) {
      case "GladiatorStance":
        gladiatorStance();
        break;

      case "DefensiveStance":
        defensiveStance();
        break;

      case "Dispel":
        dispel(param1, param2);
        break;

      case "Target":
        if (param1 === "Change") {
          change(param2, param3);
        } else if (param1 === "Remove") {
          remove(param2);
        } else {
          console.log(`Command doesn't exist!`);
        }
        break;

      default:
        console.log("Command doesn't exist!");
        break;
    }
  }

  // GladiatorStance
  function gladiatorStance() {
    string = string.toUpperCase();
    console.log(string);
  }

  // DefensiveStance
  function defensiveStance() {
    string = string.toLowerCase();
    console.log(string);
  }

  //   Dispel {index} {letter}"
  function dispel(index, letter) {
    index = Number(index);

    if (isIndexValid(index)) {
      string =
        string.substring(0, index) + letter + string.substring(index + 1);
      console.log("Success!");
    } else {
      console.log("Dispel too weak.");
    }
  }

  //  Target Change {first substring} {second substring}"
  function change(firstSubstring, secondSubstring) {
    if (string.includes(firstSubstring)) {
      //   string = string.split(firstSubstring).join(secondSubstring);

      //   let pattern = new RegExp(firstSubstring, "g");
      //   string = string.replace(pattern, secondSubstring);
      while (string.includes(firstSubstring)) {
        string = string.replace(firstSubstring, secondSubstring);
      }
      console.log(string);
    } else {
      console.log(string);
    }
  }

  // Target Remove {substring}"
  function remove(substring) {
    if (string.includes(substring)) {
      //   string = string.replace(substring, "");
      //   string = string.split(substring).join("");
      while (string.includes(substring)) {
        string = string.replace(substring, "");
      }
      console.log(string);
    }
  }

  // index validation
  function isIndexValid(index) {
    return index >= 0 && index < string.length;
  }
}

// console.log("----------------");

warriorsQuest([
  "fr1c710n",
  "GladiatorStance",
  "Dispel 2 I",
  "sfas",
  "Dispel 4 T",
  "Target Change RICTION riction",
  "For Azeroth",
]);

// console.log("----------------");

// warriorsQuest(["TR1GG3R", "Dispel 2 I", "Dispel 5 E", "For Azeroth"]);
