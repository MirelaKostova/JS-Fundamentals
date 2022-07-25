function matchFullName(input) {
  let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;

  let valids = [];

  while ((currName = pattern.exec(input)) !== null) {
    // console.log(currName[0]);
    valids.push(currName[0]);
  }

  console.log(valids.join(" "));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
);
