function heartDelivery(arr) {
  let houses = arr.shift().split("@");
  let jumpCommands = arr.shift();
  let jumpLength = 0;

  while (jumpCommands !== "Love!") {
    let result = jumpCommands.split(" ");

    let jump = Number(result[1]);
    jumpLength += jump;

    if (jumpLength >= houses.length) {
      jumpLength = 0;
    }

    if (houses[jumpLength] === 0) {
      console.log(`Place ${jumpLength} already had Valentine's day.`);
    } else {
      houses[jumpLength] -= 2;

      if (houses[jumpLength] === 0) {
        console.log(`Place ${jumpLength} has Valentine's day.`);
      }
    }

    jumpCommands = arr.shift();
  }

  console.log(`Cupid's last position was ${jumpLength}.`);

  let countValentineDays = 0;
  let failedPlaces = 0;

  houses.forEach((element) => {
    if (element === 0) {
      countValentineDays++;
    } else {
      failedPlaces++;
    }
  });

  if (countValentineDays === houses.length) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${failedPlaces} places.`);
  }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
