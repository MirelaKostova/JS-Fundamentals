// function sortNumbers(n1, n2, n3) {
//   let bigNum = 0;
//   let midNum = 0;
//   let smallNum = 0;

//   if (n1 > n2 && n1 > n3) {
//     bigNum = n1;
//     if (n2 > n3) {
//       midNum = n2;
//       smallNum = n3;
//     } else {
//       midNum = n3;
//       smallNum = n2;
//     }
//   }

//   if (n2 > n1 && n2 > n3) {
//     bigNum = n2;
//     if (n1 > n3) {
//       midNum = n1;
//       smallNum = n3;
//     } else {
//       midNum = n3;
//       smallNum = n1;
//     }
//   }

//   if (n3 > n1 && n3 > n2) {
//     bigNum = n3;
//     if (n1 > n2) {
//       midNum = n1;
//       smallNum = n2;
//     } else {
//       midNum = n2;
//       smallNum = n1;
//     }
//   }

//   console.log(bigNum);
//   console.log(midNum);
//   console.log(smallNum);
// }

// sortNumbers(26, 1, 31);

// function englishNameoftheLastDigit(num) {
//   let numToString = num.toString();
//   let lastDigit = numToString.length - 1;
//   let number = numToString[lastDigit];
//   let latinName = "";

//   switch (number) {
//     case "0":
//       latinName = "zero";
//       break;
//     case "1":
//       latinName = "one";
//       break;
//     case "2":
//       latinName = "two";
//       break;
//     case "3":
//       latinName = "three";
//       break;
//     case "4":
//       latinName = "four";
//       break;
//     case "5":
//       latinName = "five";
//       break;
//     case "6":
//       latinName = "six";
//       break;
//     case "7":
//       latinName = "seven";
//       break;
//     case "8":
//       latinName = "eight";
//       break;
//     case "9":
//       latinName = "nine";
//       break;
//     default:
//       latinName = "undefined";
//       break;
//   }
//   console.log(latinName);
// }

// englishNameoftheLastDigit(512);

// function nextDay(year, month, day) {
//   let newDate = new Date(year, month - 1, day + 1);

//   console.log(
//     `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
//   );
// }

// nextDay(2016, 9, 30);
// nextDay(2020, 3, 24);

// function reverseString(str) {
//   let printLine = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     let currChart = str[i];
//     printLine += currChart;
//   }
//   console.log(printLine);
// }

// reverseString("Hello");

// function distanceBetweenPoints(x1, y1, x2, y2) {
//   let horizontalX = 0;
//   let horizontalY = 0;

//   if (x1 > x2) {
//     horizontalX = x1 - x2;
//   } else {
//     horizontalX = x2 - x1;
//   }

//   if (y1 > y2) {
//     horizontalY = y1 - y2;
//   } else {
//     horizontalY = y2 - y1;
//   }

//   let distance = Math.pow(horizontalX, 2) + Math.pow(horizontalY, 2);

//   console.log(Math.sqrt(distance));
// }

// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
