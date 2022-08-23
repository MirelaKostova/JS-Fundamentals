function bonusScoringSystem(input) {
  input = input.map(Number);
  let studentsN = input.shift();
  let courseLectures = input.shift();
  let bonus = input.shift();

  let maxBonus = 0;
  let attendance = 0;

  for (let student = 0; student < studentsN; student++) {
    let currAttendance = input[student];
    let total = 0;

    total = (currAttendance / courseLectures) * (5 + bonus);

    if (total > maxBonus) {
      maxBonus = Math.floor(total);
      attendance = currAttendance;
    }
  }

  console.log(
    `Max Bonus: ${maxBonus}.\nThe student has attended ${attendance} lectures.`
  );
}

bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
