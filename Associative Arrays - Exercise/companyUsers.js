function companyUsers(input) {
  let companies = new Map();

  for (const line of input) {
    let [company, id] = line.split(" -> ");

    if (!companies.has(company)) {
      companies.set(company, new Set());
    }

    companies.get(company).add(id);
  }

  let sorted = Array.from(companies).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [key, value] of sorted) {
    console.log(key);

    for (const currId of value) {
      console.log("--", currId);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
