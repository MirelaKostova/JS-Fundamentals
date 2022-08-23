function inventory(arr) {
  let heroRegister = [];

  for (let el of arr) {
    let [name, level, itemList] = el.split(" / ");

    let hero = {
      name: name,
      level: level,
      itemList: itemList,
    };
    heroRegister.push(hero);
  }

  let sortedRegister = heroRegister.slice();
  sortedRegister.sort((a, b) => a.level - b.level);

  sortedRegister.forEach((el) => {
    console.log(
      `Hero: ${el.name}\nlevel => ${el.level}\nitems => ${el.itemList}`
    );
  });
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
