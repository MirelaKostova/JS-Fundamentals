// function digitsWithWord(word) {
//   let number = 0;

//   switch (word) {
//     case "one":
//       number = 1;
//       break;
//     case "two":
//       number = 2;
//       break;
//     case "three":
//       number = 3;
//       break;
//     case "four":
//       number = 4;
//       break;
//     case "five":
//       number = 5;
//       break;
//     case "six":
//       number = 6;
//       break;
//     case "seven":
//       number = 7;
//       break;
//     case "eight":
//       number = 8;
//       break;
//     case "nine":
//       number = 9;
//       break;
//     default:
//       number = 0;
//       break;
//   }

//   console.log(number);
// }

// digitsWithWord("nine");

// function primeNumberChecker(num) {
//   let isPrime = false;

//   if (num % 2 !== 0) {
//     isPrime = true;
//   }

//   console.log(isPrime ? "true" : "false");
// }

// primeNumberChecker(8);

// function cone(radius, height) {
//   let diameter = Math.pow(radius, 2);
//   let volume = (Math.PI * height * diameter) / 3;
//   let surface =
//     Math.PI * radius * (radius + Math.sqrt(diameter + Math.pow(height, 2)));

//   console.log(`volume = ${volume.toFixed(4)}`);
//   console.log(`area = ${surface.toFixed(4)}`);
// }
// cone(3, 5);

// function biggestOf3Numbers(num1, num2, num3) {
//   let biggestNumber = Number.MIN_SAFE_INTEGER;

//   if (num1 > num2 && num1 > num3) {
//     biggestNumber = num1;
//   } else if (num2 > num1 && num2 > num3) {
//     biggestNumber = num2;
//   } else if (num3 > num1 && num3 > num2) {
//     biggestNumber = num3;
//   } else {
//     biggestNumber = num1;
//   }

//   console.log(biggestNumber);
// }

// biggestOf3Numbers(-2, 7, 3);

// function binaryToDecimal(binary) {
//   let number = Number.parseInt(binary, 2);
//   console.log(number);
// }
// binaryToDecimal(11110000);

// function chessBoard(n) {
//   let currColor = "black";

//   console.log('<div class="chessboard">');

//   for (let rows = 1; rows <= n; rows++) {
//     console.log("  <div>");

//     for (let cols = 1; cols <= n; cols++) {
//       console.log(`    <span class="${currColor}"></span>`);
//       currColor = currColor === "black" ? "white" : "black";
//     }

//     if (n % 2 === 0) {
//       currColor = currColor === "black" ? "white" : "black";
//     }
//     console.log("  </div>");
//   }

//   console.log("</div>");
// }
// chessBoard(6);

function triangleArea(arg1, arg2, arg3) {}

triangleArea(2, 3.5, 4);
