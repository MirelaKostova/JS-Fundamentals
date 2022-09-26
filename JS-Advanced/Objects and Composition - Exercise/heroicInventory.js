function heroicInventory(input) {
  // Create a function that creates a register for the heroes. The output is a JSON representation.
  const heroRegister = [];

  input.forEach((line) => {
    let [heroName, heroLevel, items] = line.split(" / ");
    let currHero = {
      name: heroName,
      level: Number(heroLevel),
      items: items ? items.split(", ") : [],
    };

    heroRegister.push(currHero);
  });

  return JSON.stringify(heroRegister);
}

console.log(
  heroicInventory(["Isacc", "Derek", "Hes / 1 / Desolator, Sentinel, Antara"])
);

// console.log(
//     heroicInventory([
//       "Isacc / 25 / Apple, GravityGun",

//       "Derek / 12 / BarrelVest, DestructionSword",

//       "Hes / 1 / Desolator, Sentinel, Antara",
//     ])
//   );

// Output:
// [
//   { name: "Isacc", level: 25, items: ["Apple", "GravityGun"] },
//   { name: "Derek", level: 12, items: ["BarrelVest", "DestructionSword"] },
//   { name: "Hes", level: 1, items: ["Desolator", "Sentinel", "Antara"] },
// ];
