function argumentInfo(...params) {
  const types = {};

  params.forEach((param) => {
    const type = typeof param;
    console.log(`${type}: ${param}`);

    if (!types[type]) {
      types[type] = 0;
    }
    types[type]++;
  });

  const sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
  sorted.forEach((line) => {
    const [type, count] = line;
    console.log(`${type} = ${count}`);
  });
}

argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
