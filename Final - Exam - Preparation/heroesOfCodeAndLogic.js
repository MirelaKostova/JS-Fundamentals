function heroesOfCodeAndLogic(input) {
  // n
  let n = Number(input.shift());

  let heroes = {};
  //next n lines => "{hero name} {HP} {MP}"
  // -	HP stands for hit points and MP for mana points

  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = input.shift().split(" ");

    //set heroes and their powers
    heroes[name] = {
      HP: Number(hp),
      MP: Number(mp),
      isAlive: true,
    };

    // -a hero can have a maximum of 100 HP and 200 MP
    hp > 100 ? 100 : hp;
    mp > 200 ? 200 : mp;
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

    if (heroes[heroName].HP <= 0) {
      heroes[heroName].isAlive = false;
    }

    //If the hero is still alive (his HP is greater than 0) print message
    if (heroes[heroName].isAlive) {
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
      console.log(`${heroName} recharged for ${currMP - oldMP} MP!`);
    } else {
      heroes[heroName].MP = currMP;
      console.log(`${heroName} recharged for ${amount} MP!`);
    }
  }

  // "Heal – {hero name} – {amount}"
  function heal(heroName, amount) {
    // let oldHP = heroes[heroName].HP
    // let currHP = heroes[heroName].HP + Number(amount);
    heroes[heroName].HP = 100;
    //	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100
    // -print message:
    console.log(`${heroName} healed for ${amount} HP!`);
    // ""
  }

  //print result
  for (let member in heroes) {
    console.log(
      `${member}\n  HP: ${heroes[member].HP}\n  MP: ${heroes[member].MP}`
    );
  }
}

heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
