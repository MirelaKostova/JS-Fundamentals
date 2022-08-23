function softUniReception(arr) {
  let firstEmployee = Number(arr[0]);
  let secondEmployee = Number(arr[1]);
  let thirdEmployee = Number(arr[2]);
  let studentsCount = Number(arr[3]);
  let hoursCounter = 0;

  while (studentsCount > 0) {
    hoursCounter++;
    if (hoursCounter % 4 === 0) {
      continue;
    }
    studentsCount -= firstEmployee;
    studentsCount -= secondEmployee;
    studentsCount -= thirdEmployee;
  }

  console.log(`Time needed: ${hoursCounter}h.`);
}

softUniReception(["5", "6", "4", "20"]);
