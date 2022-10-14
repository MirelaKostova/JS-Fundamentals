function cars(input) {
  const cars = {};

  const commands = {
    create: (name) => (name = {}),
    set: (key) => (value) => (name.key = value),
    print: () => {},
    // "<key1>:<value1>,<key2>:<value2>…"
  };
  input.forEach((element) => {
    const [command, name, key, value] = element.split(" ");
    commands[command](name, key, value);
  });
  //     •	create <name> - creates an object with the supplied <name>
  // •	create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>
  // •	set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
  // •	print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…"
  //     - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.
}

// color:red
// model:new,color:red
