function cars(input) {
  const cars = {};

  const commands = {
    create: (name, key, value) =>
      (cars[name] = key ? Object.create(cars[value]) : {}),

    set: (name, key, value) => (cars[name][key] = value),

    print: (name) => {
      const result = [];

      for (const el in cars[name]) {
        result.push(`${el}:${cars[name][el]}`);
      }

      console.log(result.join(","));
    },
    // "<key1>:<value1>,<key2>:<value2>…"
  };
  input.forEach((element) => {
    const [command, name, key, value] = element.split(" ");
    commands[command](name, key, value);
  });
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);

// color:red
// model:new,color:red
