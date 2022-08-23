function employees(input) {
  let n = Number(input.shift());
  let pattern =
    /(?<name>[A-Z][a-z]{2,}\s[A-Z][a-z]{2,})#+(?<position>(\&{0,1}[A-Z][a-z]+){1,})[0-9]{2}(?<company>[A-Z]\w+\s)(?<end>JSC|Ltd.)/g;

  for (let i = 0; i < n; i++) {
    let currEmployee = input[i];
    // console.log(currEmployee);

    while ((valid = pattern.exec(currEmployee)) !== null) {
      let name = valid.groups.name;
      let position = valid.groups.position;
      position = position.split("&").join(" ");
      let company = valid.groups.company + valid.groups.end;

      console.log(`${name} is ${position} at ${company}`);
    }
  }
}

employees([
  "4",
  "Tanya Petrova##Dental&Assistants25Health Ltd.",
  "Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
  "George Fill####Orderlies99Health JSC",
  "Lily petrova#Speech&Pathology&Assistants60Health Ltd.",
]);

employees([
  "2",
  "Mariya Ivanova#Photographer&&Machine25PhotoStudio12 Ltd.",
  "Monica Hristova####Nuclear&Engineer99Station JSC",
]);
