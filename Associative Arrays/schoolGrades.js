// Write a function that stores students and their grades throughout the year.
function schoolGrades(data) {
  //Create a register
  let register = new Map();

  // Loop through the array and create variables for student and grades
  for (const line of data) {
    let token = line.split(" ");
    let student = token.shift();
    let grades = token.map(Number);

    //   ------------------------------------------------------------
    //  If a student appears more than once, add the new grades to existing ones.
    if (!register.has(student)) {
      register.set(student, grades);
    } else {
      let currGrades = register.get(student);
      let finalGrades = currGrades.concat(grades);
      register.set(student, finalGrades);
    }
  }

  //   ------------------------------------------------------------
  //  Sorted alphabeticall by the students’s name
  let sortedRegister = Array.from(register.entries()).sort(([keyA], [keyB]) =>
    keyA.localeCompare(keyB)
  );

  //   ------------------------------------------------------------
  // Create reducer function. The final result will be Average Grade.
  function avgGrade(grade) {
    let averageGrade = grade.reduce((a, b) => a + b) / grade.length;
    return averageGrade.toFixed(2);
  }

  //   ------------------------------------------------------------
  //   Loop through the array and print the full list. print the students and their average grades, sorted alphabetically by name
  for (const currStudent of sortedRegister) {
    console.log(`${currStudent[0]}: ${avgGrade(currStudent[1])}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
