function schoolRegister(array) {
  class Student {
    constructor(name, grade, avgScore) {
      this.name = name;
      this.grade = grade;
      this.avgScore = avgScore;
    }
  }

  let listOfStudents = [];

  for (const el of array) {
    let splitedArr = el.split(", ");

    let name = splitedArr[0].split(" ").pop();
    let grade = splitedArr[1].split(" ").pop();
    let avgScore = splitedArr[2].split(" ").pop();

    if (avgScore >= 3) {
      grade++;
      let newStudent = new Student(name, grade, avgScore);
      listOfStudents.push(newStudent);
    }
  }

  listOfStudents.sort((a, b) => a.grade - b.grade);

 let prevGrade = student.grade;
  for (const student of listOfStudents) {
  
    // console.log(`Average annual score from last year: ${average(students.map(s => s.score)).toFixed(2)}\n`);
  }

  averageAnnualScore(listOfStudents){
    let avgAnnual = listOfStudents.reduce(
        (previousValue, currentValue) => (previousValue + currentValue,
        initialValue)/listOfStudents
  }
}

// `{nextGrade} Grade

// List of students: {All students in that grade}

// Average annual score from last year: {average annual score on the entire class from last year}`
// }

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
