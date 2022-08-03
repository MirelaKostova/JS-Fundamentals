function schoolRegister(array) {
  // Load students list from array
  let studentsRegister = {};

  //  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  for (let line of array) {
    let tokens = line.split(", ");
    let name = tokens[0].split(": ").pop();
    let grade = Number(tokens[1].split(": ").pop()) + 1;
    let score = Number(tokens[2].split(": ").pop());

    // 'If a student has a lower score than 3, he does not go into the next class'
    if (score >= 3) {
      let student = {
        name: name,
        grade: grade,
        score: score,
      };

      if (!studentsRegister.hasOwnProperty(grade)) {
        studentsRegister[grade] = [];
      }

      studentsRegister[grade].push(student);
    }
  }

  for (let [grade, students] of Object.entries(studentsRegister)) {
    // Grade
    console.log(`${grade} Grade`);

    // All students in that grade
    let listOfStudents = [];
    students.map((students) => listOfStudents.push(students.name));

    // Average annual score
    let avgScore = 0;
    students.map((a) => (avgScore += a.score));
    avgScore /= listOfStudents.length;

    console.log(`List of students: ${listOfStudents.join(", ")}\n`);

    console.log(`Average annual score from last year: ${avgScore.toFixed(2)}`);
  }
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
