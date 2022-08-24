function squareOfStars(size) {
  // If there is no parameter specified, the rectangle should always be of size 5.
  if (size !== undefined) {
    for (let i = 1; i <= size; i++) {
      let star = "*" + " ";

      console.log(star.repeat(size));
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      let star = "*" + " ";

      console.log(star.repeat(5));
    }
  }
}

squareOfStars(1);
// *

console.log("-------");

squareOfStars(5);
// * *
// * *
