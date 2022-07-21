function worldTour(input) {
  let stops = input.shift();

  let actions = {
    "Add Stop": add,
    "Remove Stop": remove,
    Switch: swap,
  };

  while (input[0] !== "Travel") {
    let tokens = input.shift().split(":");
    let command = tokens[0];
    let action = actions[command];
    action(tokens[1], tokens[2]);

    console.log(stops);
  }

  function add(index, str) {
    index = Number(index);

    if (validate(index)) {
      stops = stops.substring(0, index) + str + stops.substring(index);
    }
  }

  function remove(start, end) {
    start = Number(start);
    end = Number(end);

    if (validate(start) && validate(end)) {
      stops = stops.substring(0, start) + stops.substring(end + 1);
    }
  }

  function swap(oldString, newString) {
    let pattern = new RegExp(oldString, "g");
    stops = stops.replace(pattern, newString);

    //   stops = stops.split(oldString).join(newString);
  }

  function validate(index) {
    return index >= 0 && index < stops.length;
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

//  - another solution 'v002'

/*
function worldTour(input) {
  let stops = input.shift();

  for (let line of input) {
    if (line === "Travel") {
      break;
    }

    line = line.split(":");
    let command = line.shift();

    switch (command) {
      case "Add Stop":
        let index = Number(line[0]);
        let str = line[1];

        if (validate(index)) {
          stops = stops.substring(0, index) + str + stops.substring(index);
        }
        break;

      case "Remove Stop":
        let [start, end] = line.map(Number);

        if (validate(start) && validate(end)) {
          stops = stops.substring(0, start) + stops.substring(end + 1);
        }
        break;

      case "Switch":
        let [oldString, newString] = line;

        let pattern = new RegExp(oldString, "g");
        stops = stops.replace(pattern, newString);

        // stops = stops.split(oldString).join(newString);

        break;
    }

    function validate(index) {
      return index >= 0 && index < stops.length;
    }

    console.log(stops);
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
*/
