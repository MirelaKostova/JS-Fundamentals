function netherRealms(input) {
  let txt = input.split(/[ ,]+/g);
  let demonsHealh = 0;
  let damage = 0;

  let demons = {};

  for (let el of txt) {
    let demonName = el;

    let onlyLetters = el.replace(/[^A-Za-z]/g, "");

    for (let currLetter of onlyLetters) {
      demonsHealh += Number(currLetter.charCodeAt(0));
    }

    let pattern = /[+-]?([0-9]*[.])?[0-9]+/g;
    while ((match = pattern.exec(el)) !== null) {
      damage += Number(match[0]);
    }

    if (el.includes("/")) {
      while (el.includes("/")) {
        el = el.replace("/", "");
        damage = damage / 2;
      }
    } else if (el.includes("*")) {
      while (el.includes("*")) {
        el = el.replace("*", "");
        damage = damage * 2;
      }
    }

    demons[demonName] = {
      demonsHealh: demonsHealh,
      damage: damage.toFixed(2),
    };

    demonsHealh = 0;
    damage = 0;
  }

  //sorted alphabetically
  let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
  // console.log(sorted);
  for (let demon of sorted) {
    // console.log(demon);
    console.log(
      `${demon[0]} - ${demons[demon[0]].demonsHealh} health, ${
        demons[demon[0]].damage
      } damage`
    );
  }
}

// netherRealms("M3ph-0.5s-0.5t0.0**");
// console.log("----------");
netherRealms("M3ph1st0**, Azazel");
// console.log("----------");
// netherRealms("Gos/ho");
// netherRealms("Azazel");
