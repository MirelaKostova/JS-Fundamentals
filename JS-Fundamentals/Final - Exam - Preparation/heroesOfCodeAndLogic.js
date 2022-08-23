function heroesOfCodeAndLogic(input) {
  // n
  let n = Number(input.shift());

  let heroes = {};
  //next n lines => "{hero name} {HP} {MP}"
  // -	HP stands for hit points and MP for mana points

  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = input.shift().split(" ");

    //set heroes and their powers
    // -a hero can have a maximum of 100 HP and 200 MP
    heroes[name] = {
      HP: hp > 100 ? 100 : Number(hp),
      MP: mp > 200 ? 200 : Number(mp),
      isAlive: true,
    };
  }

  // command actions
  let actions = {
    CastSpell: castSpell,
    TakeDamage: takeDamage,
    Recharge: recharge,
    Heal: heal,
  };

  //   start game until the "End" command is given.
  while (input[0] !== "End") {
    let [command, param1, param2, param3] = input.shift().split(" - ");
    let action = actions[command];
    action(param1, param2, param3);
  }

  //"CastSpell – {hero name} – {MP needed} – {spell name}"
  // - If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message:
  function castSpell(heroName, mpNeeded, spellName) {
    if (heroes[heroName].MP >= Number(mpNeeded)) {
      heroes[heroName].MP -= Number(mpNeeded);
      console.log(
        `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`
      );
    } else {
      // -	else the hero is unable to cast the spell
      console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
    }
  }

  //"TakeDamage – {hero name} – {damage} – {attacker}"
  function takeDamage(heroName, damage, attacker) {
    // Reduce the hero HP by the given damage amount
    let currentHP = heroes[heroName].HP - Number(damage);

    if (currentHP <= 0) {
      heroes[heroName].isAlive = false;
    }

    //If the hero is still alive (his HP is greater than 0) print message
    if (heroes[heroName].isAlive) {
      heroes[heroName].HP = currentHP;
      console.log(
        `${heroName} was hit for ${damage} HP by ${attacker} and now has ${currentHP} HP left!`
      );
    } else {
      // 	If the hero has died, remove him from your party and print message
      console.log(`${heroName} has been killed by ${attacker}!`);
      delete heroes[heroName];
    }
  }

  // Recharge – {hero name} – {amount}"
  function recharge(heroName, amount) {
    let currMP = heroes[heroName].MP + Number(amount);
    // The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200.
    if (currMP > 200) {
      let oldMP = heroes[heroName].MP;
      heroes[heroName].MP = 200;
      console.log(`${heroName} recharged for ${200 - oldMP} MP!`);
    } else {
      heroes[heroName].MP = currMP;
      console.log(`${heroName} recharged for ${amount} MP!`);
    }
  }

  // "Heal – {hero name} – {amount}"
  function heal(heroName, amount) {
    let oldHP = heroes[heroName].HP; //70
    let currHP = heroes[heroName].HP + Number(amount); //70 + 50 = 120 30

    if (currHP > 100) {
      heroes[heroName].HP = 100;
      console.log(`${heroName} healed for ${100 - oldHP} HP!`);
    } else {
      heroes[heroName].HP = currHP;
      console.log(`${heroName} healed for ${amount} HP!`);
    }
  }

  //print result
  for (let member in heroes) {
    console.log(
      `${member}\n  HP: ${heroes[member].HP}\n  MP: ${heroes[member].MP}`
    );
  }
}

// heroesOfCodeAndLogic([
//   "2",
//   "Solmyr 85 120",
//   "Kyrre 99 50",
//   "Heal - Solmyr - 10",
//   "Recharge - Solmyr - 50",
//   "TakeDamage - Kyrre - 66 - Orc",
//   "CastSpell - Kyrre - 15 - ViewEarth",
//   "End",
// ]);

heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
