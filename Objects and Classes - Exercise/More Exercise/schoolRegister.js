function schoolRegister(array) {
  // Load students list from array
  let studentsRegister = [];

  for (const el of array) {
    let splitedArr = el.split(", ");

    let name = splitedArr[0].split(" ").pop();
    let grade = splitedArr[1].split(" ").pop();
    let score = Number(splitedArr[2].split(" ").pop());

    // 'If a student has a lower score than 3, he does not go into the next class'
    if (score >= 3) {
      grade++;

      let student = { name, grade, score };
      studentsRegister.push(student);
    }
  }
  //   // console.log("listOfStudents -->", listOfStudents);

  // ---------------------------------------------
  // School register sorted in ascending order by grade

  studentsRegister.sort((a, b) => a.grade - b.grade);
  console.log("listOfStudents -->", listOfStudents);

  function averageAnnualScore(studentsRegister) {
    return listOfStudents.reduce(
      (a, b) => (a.score + b.score, 0) / listOfStudents.length
    );
  }
}

// for (const element of listOfStudents) {
//   const students = element.name;
//   console.log(`${element.grade} Grade`);
//   //   console.log(
//   //     `List of students: ${listOfStudents
//   //       .map((el) => el.listOfStudents)
//   //       .join(", ")}`
//   //   );
//   //   // console.log(
//   //   //   `Average annual score from last year: ${average(
//   //   //     students.map((s) => s.score)
//   //   //   ).toFixed(2)}\n`
//   //   // );

///////////////////////////////////////

// `{nextGrade} Grade

// List of students: {All students in that grade}

// Average annual score from last year: {average annual score on the entire class from last year}`
// }

function schoolRegister(input) {
  const register = {};

  for (let line of input) {
    let tokens = line.split(", ");

    let student = tokens[0].split(" ").pop();
    let grade = Number(tokens[1].split(" ").pop()) + 1;
    let score = Number(tokens[2].split(" ").pop());

    if (score >= 3) {
      let profile = { student, score };

      if (!register.hasOwnProperty(grade)) {
        register[grade] = [];
      }

      register[grade].push(profile);
    }
  }

  const grades = Object.keys(register);

  for (const grade of grades) {
    const students = register[grade];

    console.log(`${grade} Grade`);
    console.log(
      `List of students: ${students.map((s) => s.student).join(", ")}`
    );
    console.log(
      `Average annual score from last year: ${average(
        students.map((s) => s.score)
      ).toFixed(2)}\n`
    );
  }

  function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
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
