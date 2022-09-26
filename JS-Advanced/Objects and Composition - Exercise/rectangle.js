function rectangle(width, height, color) {
  let rectangleObj = {
    width,
    height,
    color: color.replace(color[0], color[0].toUpperCase()),
    calcArea() {
      let result = width * height;
      return result;
    },
  };

  return rectangleObj;
}

let rect = rectangle(4, 5, "red");

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

// Your function must return an object with all properties and methods as described.
//  The calcArea() method of the object should return a number.
// The first letter in the color must be upperCase().
