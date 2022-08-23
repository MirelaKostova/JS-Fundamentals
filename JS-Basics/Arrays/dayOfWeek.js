// Write a program, which receives a number and prints the corresponding name of the day of the week (in English).
// If the number is NOT a valid day, print: "Invalid day!".

function dayOfWeek(number) {
  if (number < 1 || number > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    console.log(days[number - 1]);
  }
}

dayOfWeek(3);
dayOfWeek(6);
