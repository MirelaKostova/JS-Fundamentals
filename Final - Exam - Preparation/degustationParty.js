function degustationParty(input) {
  let guestList = {};
  let countUnlikedMeals = 0;

  // Loop till 'Stop'
  while (input[0] !== "Stop") {
    let [action, guestName, meal] = input.shift().split("-");

    if (action === "Like") {
      like(guestName, meal);
    } else if (action === "Dislike") {
      dislike(guestName, meal);
    }
  }

  // Print result
  //   console.log(Object.entries(guestList));
  for (let [name, meals] of Object.entries(guestList)) {
    console.log(`${name}: ${meals.meal.join(", ")}`);
  }

  //print count of all unliked meals
  console.log(`Unliked meals: ${countUnlikedMeals}`);

  // Like
  function like(guestName, meal) {
    if (!guestList.hasOwnProperty(guestName)) {
      guestList[guestName] = {
        meal: [],
      };
    }

    if (!guestList[guestName].meal.includes(meal)) {
      guestList[guestName].meal.push(meal);
    }
  }

  // Dislike
  function dislike(guestName, meal) {
    if (!guestList.hasOwnProperty(guestName)) {
      console.log(`${guestName} is not at the party.`);
    } else {
      // if the guest doesn`t have the meal
      if (!guestList[guestName].meal.includes(meal)) {
        console.log(
          `${guestName} doesn't have the ${meal} in his/her collection.`
        );
      } else if (guestList[guestName].meal.includes(meal)) {
        // remove the meal
        countUnlikedMeals++;
        console.log(`${guestName} doesn't like the ${meal}.`);

        let index = guestList[guestName].meal.indexOf(meal);
        guestList[guestName].meal.splice(index, 1);
      }
    }
  }
}

degustationParty([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Penelope-dessert",
  "Like-Misho-salad",
  "Stop",
]);

/* 
  Krisi: shrimps, soup
  Penelope: dessert
  Misho: salad
  Unliked meals: 0
*/

console.log("--------------");
degustationParty([
  "Like-Krisi-shrimps",
  "Dislike-Vili-carp",
  "Dislike-Krisi-salad",
  "Stop",
]);

/*
  Vili is not at the party.
  Krisi doesn't have the salad in his/her 
  collection.
  Krisi: shrimps
  Unliked meals: 0
*/

console.log("--------------");
degustationParty(["Like-Katy-fish", "Dislike-Katy-fish", "Stop"]);

/*
  Katy doesn't like the fish.
  Katy:
  Unliked meals: 1
*/
