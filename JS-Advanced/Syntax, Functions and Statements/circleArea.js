function circleArea(arg) {
  if (typeof arg == "number") {
    let area = arg ** 2 * Math.PI;

    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof arg}.`
    );
  }
}

circleArea(5);
// 78.54

circleArea("name");
// We can not calculate the circle area, because we receive a string.
