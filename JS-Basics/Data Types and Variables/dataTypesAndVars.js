// function echoType(param) {
//   let type = typeof param;
//   if (type === "string" || type === "number") {
//     console.log(type);
//     console.log(param);
//   } else {
//     console.log(type);
//     console.log("Parameter is not suitable for printing");
//   }
// }
// // echoType("Hello");
// // echoType(15);
// echoType(null);

// function concatenateNames(firstName, lastName, delimiter) {
//   console.log(`${firstName}${delimiter}${lastName}`);
// }
// concatenateNames("John", "Smith", "->");

// function rightPlace(firstWord, char, secondWord) {
//   let result = "";

//   for (let i = 0; i < firstWord.length; i++) {
//     let currChart = firstWord[i];

//     if (currChart === "_") {
//       result += char;
//     } else {
//       result += currChart;
//     }
//   }
//   if (result === secondWord) {
//     console.log("Matched");
//   } else {
//     console.log("Not Matched");
//   }
// }
// rightPlace("Str_ng", "I", "Strong");

// function integerAndFloat(x, y, z) {
//   let sum = x + y + z;
//   let isFloat = false;
//   if (parseInt(sum) !== sum) {
//     isFloat = true;
//   }
//   console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
// }
// integerAndFloat(9, 100, 1);

// function amazingNumbers(num) {
//   let sum = 0;
//   let numToString = String(num);

//   for (let i = 0; i < numToString.length; i++) {
//     sum += Number(numToString[i]);
//   }

//   let sumToString = String(sum);
//   let isAmazing = false;

//   for (let i = 0; i < sumToString.length; i++) {
//     if (sumToString[i] == 9) {
//       isAmazing = true;
//       break;
//     }
//   }

//   console.log(`${num} Amazing? ${isAmazing ? "True" : "False"}`);
// }

// amazingNumbers(1233);
// amazingNumbers(583472);

// function gramophone(band, album, song) {
//   //(albumName.length * bandName.length) * song-name.length / 2

//   let time = (band.length * album.length * song.length) / 2;
//   let rotations = Math.ceil(time / 2.5);

//   console.log(`The plate was rotated ${rotations} times.`);
// }

// gramophone("Rammstein", "Sehnsucht", "Engel");

// function requiredReading(pages, pagesPerHour, days) {
//   let result = pages / pagesPerHour / days;
//   console.log(result);
// }
// requiredReading(212, 20, 2);

// function centuriesToMinutes(centuries) {
//   let years = centuries * 100;
//   let days = Math.trunc(years * 365.2422);
//   let hours = days * 24;
//   let mins = hours * 60;
//   console.log(
//     `${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`
//   );
// }
// centuriesToMinutes(1);

// function specialNumbers(n) {
//   for (let CurrNumber = 1; CurrNumber <= n; CurrNumber++) {
//     let isSpecial = false;
//     let sum = 0;
//     let currNumberToString = String(CurrNumber);
//     let currDigit = 0;

//     for (let i = 0; i < currNumberToString.length; i++) {
//       currDigit = Number(currNumberToString[i]);
//       sum += currDigit;
//     }
//     if (sum == 5 || sum == 7 || sum == 11) {
//       isSpecial = true;
//     }
//     console.log(`${CurrNumber} -> ${isSpecial ? "True" : "False"}`);
//   }
// }
// specialNumbers(15);

// function triplesOfLatinLetters(num) {
//   let number = Number(num);

//   for (let i = 0; i < number; i++) {
//     for (let j = 0; j < number; j++) {
//       for (let k = 0; k < number; k++) {
//         let letter1 = String.fromCharCode(97 + i);
//         let letter2 = String.fromCharCode(97 + j);
//         let letter3 = String.fromCharCode(97 + k);
//         console.log(letter1 + letter2 + letter3);
//       }
//     }
//   }
// }
// triplesOfLatinLetters("3");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function sumDigits(num) {
//   let numToString = String(num);
//   let sum = 0;
//   for (let i = 0; i < numToString.length; i++) {
//     let currDigit = Number(numToString[i]);
//     sum += currDigit;
//   }
//   console.log(sum);
// }

// // sumDigits(245678);
// // sumDigits(97561);
// // sumDigits(543);

// function charsToString(ch1, ch2, ch3) {
//   console.log(ch1 + ch2 + ch3);
// }

// charsToString("a", "b", "c");

// function townInfo(town, population, area) {
//   console.log(
//     `Town ${town} has population of ${population} and area ${area} square km.`
//   );
// }
// townInfo("Sofia", 1286383, 492);

// function convertMetersToKilometres(metres) {
//   let res = metres / 1000;
//   console.log(res.toFixed(2));
// }
// convertMetersToKilometres(798);

// function poundsToDollars(pounds) {
//   let dollars = pounds * 1.31;
//   console.log(dollars.toFixed(3));
// }

// poundsToDollars(39);

// function reversedChars(par1, par2, par3) {
//   console.log(`${par3} ${par2} ${par1}`);
// }
// reversedChars("A", "B", "C");

// function lowerOrUpper(char) {
//   console.log(char.toUpperCase() === char ? "upper-case" : "lower-case");
// }
// lowerOrUpper("m");

// function calculator(num1, operator, num2) {
//   let result = 0;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//   }

//   console.log(result.toFixed(2));
// }

// calculator(5, "+", 10);

// function gladiatorExpenses(
//   lostFightsCount,
//   helmetPrice,
//   swordPrice,
//   shieldPrice,
//   armorPrice
// ) {
//   let expenses = 0;
//   let brokenShields = 0;

//   for (let loses = 1; loses <= lostFightsCount; loses++) {
//     if (loses % 2 == 0) {
//       expenses += helmetPrice;
//     }
//     if (loses % 3 == 0) {
//       expenses += swordPrice;
//     }
//     if (loses % 6 == 0) {
//       expenses += shieldPrice;
//       brokenShields++;

//       if (brokenShields % 2 == 0) {
//         expenses += armorPrice;
//       }
//     }
//   }

//   console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
// }

// gladiatorExpenses(23, 12.5, 21.5, 40, 200);

// function spiceMustFlow(startingYield) {
//   let daysCounter = 0;
//   let spicesExtracted = 0;

//   while (startingYield >= 100) {
//     daysCounter++;
//     spicesExtracted += startingYield - 26;
//     startingYield -= 10;
//   }

//   console.log(daysCounter);

//   if (daysCounter !== 0) {
//     console.log(spicesExtracted - 26);
//   } else {
//     console.log(spicesExtracted);
//   }
// }

// spiceMustFlow(111);
