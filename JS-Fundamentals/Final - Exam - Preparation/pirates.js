function pirates(input) {
  // make list of targets
  let listOfTargets = {};

  let actions = {
    Plunder: plunder,
    Prosper: prosper,
  };

  // parse input until "Sail" command
  while (input[0] !== "Sail") {
    let [city, population, gold] = input.shift().split("||");

    if (listOfTargets.hasOwnProperty(city)) {
      listOfTargets[city].population += Number(population);
      listOfTargets[city].gold += Number(gold);
    } else {
      listOfTargets[city] = {
        population: Number(population),
        gold: Number(gold),
      };
    }
  }

  // shift() Sail command
  input.shift();

  // parse input until "End" command
  while (input[0] !== "End") {
    let [command, par1, par2, par3] = input.shift().split("=>");
    let action = actions[command];
    action(par1, par2, par3);
  }

  // - "Plunder=>{town}=>{people}=>{gold}"
  function plunder(town, people, gold) {
    listOfTargets[town].population -= Number(people);
    listOfTargets[town].gold -= Number(gold);

    console.log(
      `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
    );

    let isDisbanded =
      listOfTargets[town].population <= 0 || listOfTargets[town].gold <= 0;

    if (isDisbanded) {
      console.log(`${town} has been wiped off the map!`);
      delete listOfTargets[town];
    }
  }

  // - "Prosper=>{town}=>{gold}"
  function prosper(town, gold) {
    if (Number(gold) < 0) {
      console.log("Gold added cannot be a negative number!");
    } else {
      listOfTargets[town].gold += Number(gold);
      console.log(
        `${gold} gold added to the city treasury. ${town} now has ${listOfTargets[town].gold} gold.`
      );
    }
  }

  let count = Object.keys(listOfTargets).length;

  // print result

  if (count == 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );
    //{town1} -> Population: {people} citizens, Gold: {gold} kg
    for (let town in listOfTargets) {
      console.log(
        `${town} -> Population: ${listOfTargets[town].population} citizens, Gold: ${listOfTargets[town].gold} kg`
      );
    }
  }
}

// pirates([
//   "Tortuga||345000||1250",
//   "Santo Domingo||240000||630",
//   "Havana||410000||1100",
//   "Sail",
//   "Plunder=>Tortuga=>75000=>380",
//   "Prosper=>Santo Domingo=>180",
//   "End",
// ]);

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
