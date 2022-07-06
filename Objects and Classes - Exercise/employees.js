function employees(list) {
  let employeeInfo = {};

  for (let name of list) {
    (employeeInfo.name = name),
      (employeeInfo.personalNumber = name.length),
      console.log(
        `Name: ${employeeInfo.name} -- Personal Number: ${employeeInfo.personalNumber}`
      );
  }
}

employees([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
