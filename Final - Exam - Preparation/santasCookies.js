function santasCookies(input) {
  //the amount of batches – n
  const n = input.shift();

  let cookiesPerBake = 0;
  let totalBoxes = 0;

  let batches = [];

  //For every batch you will receive ingredient each on a new line.
  // - flour, sugar and cocoa in grams
  for (let i = 0; i < input.length; i += n) {
    const flour = Number(input.shift());
    const sugar = Number(input.shift());
    const cocoa = Number(input.shift());

    let batch = {
      flour: flour,
      sugar: sugar,
      cocoa: cocoa,
    };

    batches.push(batch);
  }

  batches.forEach((cookies) => {
    let boxesPerBake = 0;

    cookiesPerBake =
      ((140 + 10 + 20) *
        Math.min(
          flourCups(cookies.flour),
          sugarSpoons(cookies.sugar),
          cocoaSpoons(cookies.cocoa)
        )) /
      25;

    // - (<=0), print the following message: "Ingredients are not enough for a box of cookies."
    // - else calculate the cookies and print the number of boxes you get for the current batch:
    //   "Boxes of cookies: {boxes of cookies per current bake}"

    if (
      flourCups(cookies.flour) <= 0 ||
      sugarSpoons(cookies.sugar) <= 0 ||
      cocoaSpoons(cookies.cocoa) <= 0
    ) {
      console.log(`Ingredients are not enough for a box of cookies.`);
    } else {
      boxesPerBake = Math.floor(cookiesPerBake / 5);

      totalBoxes += boxesPerBake;
      console.log(`Boxes of cookies: ${boxesPerBake}`);
    }
  });

  console.log(`Total boxes: ${totalBoxes}`);

  //flourCups divide flour by cups.
  function flourCups(flour) {
    return flour / 140;
  }

  //sugarSpoons divide sugar by bigSpoon.
  function sugarSpoons(sugar) {
    return sugar / 20;
  }

  //cocoaSpoons divide cocoa by smallSpoon.
  function cocoaSpoons(cocoa) {
    return cocoa / 10;
  }
}

santasCookies([2, 200, 300, 500, 100, 200, 50]);
// santasCookies([1, 1400, 200, 100]);
