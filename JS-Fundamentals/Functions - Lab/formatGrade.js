function formatGrade(grade) {
  let result = null;
  let finalGrade = grade.toFixed(2);
  if (grade > 3.0) {
    if (grade < 3.5) {
      result = `Poor (${finalGrade})`;
    } else if (grade < 4.5) {
      result = `Good (${finalGrade})`;
    } else if (grade < 5.5) {
      result = `Very good (${finalGrade})`;
    } else if (grade >= 5.5) {
      result = `Excellent (${finalGrade})`;
    }
  } else {
    result = "Fail (2)";
  }
  console.log(result);
}

formatGrade(5.33);
