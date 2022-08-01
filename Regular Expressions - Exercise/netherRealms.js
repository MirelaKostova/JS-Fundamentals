function netherRealms(input) {
  let demonsArray = input.split(/[ ,]+/g);
  // console.log(demonsArray);

  let demons = {};

  for (let demon of demonsArray) {
    let demonsHealh = 0;
    let damage = 0;

    let onlyLetters = demon.replace(/[^A-Za-z]/g, "");

    for (let currLetter of onlyLetters) {
      demonsHealh += Number(currLetter.charCodeAt(0));
    }

    let isMatch = false;
    let pattern = /[+-]?([0-9]*[.])?[0-9]+/g;
    while ((match = pattern.exec(demon)) !== null) {
      isMatch = true;
      damage += Number(match[0]);
    }

    if (isMatch) {
      if (demon.includes("/") || demon.includes("*")) {
        demon === "*" ? (damage *= 2) : (damage /= 2);
      }
    }

    demons[demon] = {
      demonsHealh: demonsHealh,
      damage: damage.toFixed(2),
    };
  }

  //print sorted alphabetically
  Object.entries(demons)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([demon, data]) => {
      console.log(
        `${demon} - ${data.demonsHealh} health, ${data.damage} damage`
      );
    });
}

netherRealms("M3ph-0.5s-0.5t0.0**");
console.log("----------");
netherRealms("M3ph1st0**, Azazel");
console.log("----------");
netherRealms("Gos/ho");
// netherRealms("Azazel");

// netherRealms("C3ph1st0**, Azazel     Hsgfaufaf Bkljij, Dih");
