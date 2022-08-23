function guineaPig(arr) {
  let newArr = arr
    .slice()
    .map(Number)
    .map((el) => (el *= 1000));

  let foodInGrams = newArr[0];
  let hayInGrams = newArr[1];
  let coverGrams = newArr[2];
  let pigsWeightGrams = newArr[3];

  let isFoodEnough = true;
  let isHayEnough = true;
  let isCoverEnough = true;

  for (let days = 1; days <= 30; days++) {
    foodInGrams -= 300;

    if (foodInGrams < 300) {
      isFoodEnough = false;
      break;
    }

    if (days % 2 === 0) {
      let hay = foodInGrams * 0.05;
      hayInGrams -= hay;

      if (hayInGrams < hay) {
        isHayEnough = false;
        break;
      }
    }

    if (days % 3 === 0) {
      coverGrams -= (pigsWeightGrams * 1) / 3;
      coverGrams = Math.round(coverGrams * 100) / 100;
      //   console.log(coverGrams);
      if (coverGrams < pigsWeightGrams / 3) {
        isCoverEnough = false;
        break;
      }
    }
  }

  if (isFoodEnough && isHayEnough && isCoverEnough) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(
        2
      )}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(
        coverGrams / 1000
      ).toFixed(2)}.`
    );
  } else {
    console.log(`Merry must go to the pet store!`);
  }
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
