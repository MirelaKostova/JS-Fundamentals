function blackFlag(input) {
  let [days, dailyPlunder, expectedPlunder] = input.map(Number);
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    let currPlunder = dailyPlunder;

    if (i % 3 == 0) {
      currPlunder *= 1.5;
    }

    totalPlunder += currPlunder;

    if (i % 5 == 0) {
      totalPlunder *= 0.7;
    }
  }

  totalPlunder >= expectedPlunder
    ? console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    : console.log(
        `Collected only ${percentage(
          totalPlunder,
          expectedPlunder
        )}% of the plunder.`
      );

  function percentage(totalPlunder, expectedPlunder) {
    let percentage = (totalPlunder / expectedPlunder) * 100;
    return percentage.toFixed(2);
  }
}

// blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
