function convertToJSON(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  };

  let convertedToJSON = JSON.stringify(person);

  console.log(convertedToJSON);
}

convertToJSON("George", "Jones", "Brown");
