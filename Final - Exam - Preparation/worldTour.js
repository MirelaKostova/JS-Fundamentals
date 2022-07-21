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

        // let pattern = new RegExp(oldString, "g");
        // stops = stops.replace(pattern, newString);

        stops = stops.split(oldString).join(newString);

        break;
    }

    function validate(index) {
      return index >= 0 && index < stops.length;
    }

    console.log(stops);
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
