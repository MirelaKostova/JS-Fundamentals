// function multiplyNumberBy2(num) {
//   console.log(num * 2);
// }

// multiplyNumberBy2(4);
// multiplyNumberBy2(2);

// function studentInformation(name, age, grade) {
//   console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
// }
// studentInformation("John", 15, 5.54678);
// studentInformation("Steve", 16, 2.1426);

// function excellentGrade(grade) {
//   if (grade >= 5.5) {
//     console.log("Excellent");
//   } else {
//     console.log("Not excellent");
//   }
// }
// excellentGrade(5.5);

// function foreignLanguages(country) {
//   switch (country) {
//     case "England":
//     case "USA":
//       console.log("English");
//       break;

//     case "Spain":
//     case "Argentina":
//     case "Mexico":
//       console.log("Spanish");
//       break;

//     default:
//       console.log("unknown");
//       break;
//   }
// }

// foreignLanguages("USA");
// foreignLanguages("Bulgaria");
// foreignLanguages("Mexico");

// function monthPrinter(num) {
//   switch (num) {
//     case 1:
//       console.log("January");
//       break;
//     case 2:
//       console.log("February");
//       break;
//     case 3:
//       console.log("March");
//       break;
//     case 4:
//       console.log("April");
//       break;
//     case 5:
//       console.log("May");
//       break;
//     case 6:
//       console.log("June");
//       break;
//     case 7:
//       console.log("July");
//       break;
//     case 8:
//       console.log("August");
//       break;
//     case 9:
//       console.log("September");
//       break;
//     case 10:
//       console.log("October");
//       break;
//     case 11:
//       console.log("November");
//       break;
//     case 12:
//       console.log("December");
//       break;
//     default:
//       console.log("Error!");
//       break;
//   }
// }

// monthPrinter(2);

// function theatrePromotions(day, age) {
//   if (age >= 0 && age <= 1000) {
//     switch (day) {
//       case "Weekday":
//         if (age > 64 && age <= 122) {
//           console.log("12$");
//         } else if (age > 18 && age <= 64) {
//           console.log("18$");
//         } else if (age >= 0 && age <= 18) {
//           console.log("12$");
//         }
//         break;

//       case "Weekend":
//         if (age > 64 && age <= 122) {
//           console.log("15$");
//         } else if (age > 18 && age <= 64) {
//           console.log("20$");
//         } else if (age >= 0 && age <= 18) {
//           console.log("15$");
//         }
//         break;

//       case "Holiday":
//         if (age > 64 && age <= 122) {
//           console.log("10$");
//         } else if (age > 18 && age <= 64) {
//           console.log("12$");
//         } else if (age >= 0 && age <= 18) {
//           console.log("5$");
//         }
//         break;
//     }
//   } else {
//     console.log("Error!");
//   }
// // }
// theatrePromotions("Weekday", 42);
// theatrePromotions("Holiday", -12);
// theatrePromotions("Holiday", 15);

// function numbersFrom1to5() {
//   let i = 0;
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }
// numbersFrom1to5();

// function divisibleBy3() {
//   for (let i = 3; i <= 100; i += 3) {
//     console.log(i);
//   }
// }
// divisibleBy3();

// function numbersFromNTo1(n) {
//   while (n >= 1) {
//     console.log(n--);
//     if (n < 1) {
//       break;
//     }
//   }
// }
// numbersFromNTo1(10);

// function numbersFromMToN(m, n) {
//   for (let i = m; i >= n; i--) {
//     console.log(i);
//   }
// }
// numbersFromMToN(6, 2);

// function sumOfOddNums(n) {
//   let sumOfOdds = 0;
//   let curNum = 1;
//   let index = 1;
//   while (index <= n) {
//     sumOfOdds += curNum;
//     console.log(curNum);
//     curNum += 2;
//     index++;
//   }
//   console.log(`Sum: ${sumOfOdds}`);
// }
// sumOfOddNums(3);

// function ages(age) {
//   if (age < 0) {
//     console.log("out of bounds");
//   } else if (age <= 2) {
//     console.log("baby");
//   } else if (age <= 13) {
//     console.log("child");
//   } else if (age <= 19) {
//     console.log("teenager");
//   } else if (age <= 65) {
//     console.log("adult");
//   } else if (age >= 66) {
//     console.log("elder");
//   }
// }
// ages(-1);

// function rounding(number, precision) {
//   if (precision > 15) {
//     precision = 15;
//   }
//   let roundedNum = number.toFixed(precision);
//   console.log(parseFloat(roundedNum));
// }
// rounding(3.1415926535897932384626433832795, 2);
// rounding(10.5, 3);

// function division(num) {
//   let isBiggerDivision = false;
//   let biggerNumber = 0;

//   if (num % 10 === 0) {
//     isBiggerDivision = true;
//     biggerNumber = 10;
//   } else if (num % 7 === 0) {
//     isBiggerDivision = true;
//     biggerNumber = 7;
//   } else if (num % 6 === 0) {
//     isBiggerDivision = true;
//     biggerNumber = 6;
//   } else if (num % 3 === 0) {
//     isBiggerDivision = true;
//     biggerNumber = 3;
//   } else if (num % 2 === 0) {
//     isBiggerDivision = true;
//     biggerNumber = 2;
//   }

//   if (isBiggerDivision) {
//     console.log(`The number is divisible by ${biggerNumber}`);
//   } else {
//     console.log("Not divisible");
//   }
// }

// division(30);
// division(15);
// division(12);
// division(1643);

// function vacation(count, type, day) {
//   let totalPrice = 0;

//   switch (type) {
//     case "Students":
//       if (day === "Friday") {
//         totalPrice = count * 8.45;
//       } else if (day === "Saturday") {
//         totalPrice = count * 9.8;
//       } else if (day === "Sunday") {
//         totalPrice = count * 10.46;
//       }
//       if (count >= 30) {
//         totalPrice -= totalPrice * 0.15;
//       }
//       break;

//     case "Business":
//       if (count >= 100) {
//         count -= 10;
//       }
//       if (day === "Friday") {
//         totalPrice = count * 10.9;
//       } else if (day === "Saturday") {
//         totalPrice = count * 15.6;
//       } else if (day === "Sunday") {
//         totalPrice = count * 16;
//       }
//       break;

//     case "Regular":
//       if (day === "Friday") {
//         totalPrice = count * 15;
//       } else if (day === "Saturday") {
//         totalPrice = count * 20;
//       } else if (day === "Sunday") {
//         totalPrice = count * 22.5;
//       }
//       if (count >= 10 && count <= 20) {
//         totalPrice -= totalPrice * 0.05;
//       }
//       break;
//   }

//   console.log(`Total price: ${totalPrice.toFixed(2)}`);
// }
// vacation(30, "Students", "Sunday");

// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }

// leapYear(2003);

// function printAndSum(startNum, endNum) {
//   let sum = 0;
//   let printLine = "";
//   for (let index = startNum; index <= endNum; index++) {
//     printLine += index + " ";
//     sum += index;
//   }
//   console.log(printLine);
//   console.log(`Sum: ${sum}`);
// }
// printAndSum(0, 26);

// function triangleOfNumbers(n) {
//   for (let row = 1; row <= n; row++) {
//     let printLine = "";
//     for (let col = 1; col <= row; col++) {
//       printLine += `${row} `;
//     }
//     console.log(printLine);
//   }
// }
// triangleOfNumbers(3);

// function multiplicationTable(num) {
//   for (let times = 1; times <= 10; times++) {
//     console.log(`${num} X ${times} = ${num * times}`);
//   }
// }
// multiplicationTable(5);

// function logIn(input) {
//   let index = 0;
//   let username = input[index];
//   index++;
//   let password = "";
//   let wrongPassCounter = 0;

//   for (let i = username.length - 1; i >= 0; i--) {
//     password = password + username[i];
//   }

//   while (input[index] !== password) {
//     wrongPassCounter++;
//     if (wrongPassCounter === 4) {
//       console.log(`User ${username} blocked!`);
//       return;
//     } else {
//       console.log("Incorrect password. Try again.");
//     }
//     index++;
//   }
//   if (input[index] === password) {
//     console.log(`User ${username} logged in.`);
//   }
// }
// // logIn(["Acer", "login", "go", "let me in", "recA"]);
// logIn(["momo", "omom"]);

function thePyramidOfKingDjoser() {}
thePyramidOfKingDjoser();
