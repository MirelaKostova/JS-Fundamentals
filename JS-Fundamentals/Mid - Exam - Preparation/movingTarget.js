function movingTarget(input) {
  let sequence = input.shift().split(" ").map(Number);

  while (input[0] !== "End") {
    let [command, p1, p2] = input.shift().split(" ");
    p1 = Number(p1);
    p2 = Number(p2);

    if (command === "Shoot") {
      shoot(p1, p2);
    } else if (command === "Add") {
      add(p1, p2);
    } else if (command === "Strike") {
      strike(p1, p2);
    }
  }

  console.log(sequence.join("|"));

  function shoot(index, power) {
    let target = sequence[index];

    if (isValid(index)) {
      target -= power;

      if (target > 0) {
        sequence[index] = target;
      } else {
        sequence.splice(index, 1);
      }
    }
  }

  function add(index, value) {
    if (isValid(index)) {
      sequence.splice(index, 0, value);
    } else {
      console.log("Invalid placement!");
    }
  }

  function strike(index, radius) {
    let startIndex = index - radius;
    let endIndex = index + radius;
    let shootLength = radius * 2 + 1;

    if (isValid(startIndex) && isValid(index) && isValid(endIndex)) {
      sequence.splice(startIndex, shootLength);
    } else {
      console.log("Strike missed!");
    }
  }

  function isValid(index) {
    return index >= 0 && index < sequence.length;
  }
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);

movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
