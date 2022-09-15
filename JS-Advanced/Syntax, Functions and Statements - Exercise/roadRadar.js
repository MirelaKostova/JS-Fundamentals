function roadRadar(currSpeed, area) {
  let speedLimit = 0;
  let status = "reckless driving";

  switch (area) {
    case "motorway":
      speedLimit = 130;
      checkSpeed(currSpeed, speedLimit);
      break;
    case "interstate":
      speedLimit = 90;
      checkSpeed(currSpeed, speedLimit);
      break;
    case "city":
      speedLimit = 50;
      checkSpeed(currSpeed, speedLimit);
      break;
    case "residential":
      speedLimit = 20;
      checkSpeed(currSpeed, speedLimit);
      break;
  }

  function checkSpeed(currSpeed, speedLimit) {
    if (currSpeed > speedLimit) {
      let difference = currSpeed - speedLimit;

      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      }

      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
      );
    } else {
      console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`);
    }
  }
}

roadRadar(40, "city");
// Driving 40 km/h in a 50 zone

console.log("---------------");
roadRadar(21, "residential");
// The speed is 1 km/h faster than the allowed speed of 20 - speeding

console.log("---------------");
roadRadar(120, "interstate");
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

console.log("---------------");
roadRadar(200, "motorway");
// The speed is 70 km/h faster than the allowed speed of 130 - reckless drivin
