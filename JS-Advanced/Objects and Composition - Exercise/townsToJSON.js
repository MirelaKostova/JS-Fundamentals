function townsToJSON(input) {
  input.shift();
  let result = [];

  input.forEach((line) => {
    let [a, town, latitude, longitude, b] = line
      .split("|")
      .map((x) => x.trim());
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let currTown = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };

    result.push(currTown);
  });

  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

// Output:
// [
//   { Town: "Sofia", Latitude: 42.7, Longitude: 23.32 },
//   { Town: "Beijing", Latitude: 39.91, Longitude: 116.36 },
// ];
