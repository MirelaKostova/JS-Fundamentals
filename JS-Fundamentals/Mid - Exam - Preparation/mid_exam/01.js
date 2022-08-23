function springVacation(input) {
  input = input.map(Number);

  let days = input.shift();
  let budget = input.shift();
  let people = input.shift();
  let priceFuelPerKm = input.shift();
  let foodPerPersonForDay = input.shift();
  let hotelPerPersonForDay = input.shift();

  let isTravelling = true;
  let expenses = 0;

  let totalFood = foodPerPersonForDay * people * days;
  let totalHotel = hotelPerPersonForDay * people * days;

  if (people > 10) {
    totalHotel *= 0.75;
  }

  let totalFoodAndHotel = totalFood + totalHotel;
  expenses += totalFoodAndHotel;

  // console.log(input);
  for (let i = 1; i <= days; i++) {
    let currExpenses = input[i - 1] * priceFuelPerKm;
    expenses += currExpenses;

    if (i % 3 === 0 || i % 5 === 0) {
      expenses *= 1.4;
    }

    if (i % 7 == 0) {
      let money = expenses / people;
      expenses -= money;
    }

    if (expenses > budget) {
      isTravelling = false;
      console.log(
        `Not enough money to continue the trip. You need ${(
          expenses - budget
        ).toFixed(2)}$ more.`
      );
      break;
    }
  }

  if (isTravelling) {
    console.log(
      `You have reached the destination. You have ${(budget - expenses).toFixed(
        2
      )}$ budget left.`
    );
  }
}

// springVacation([
//   "7",
//   "12000",
//   "5",
//   "1.5",
//   "10",
//   "20",
//   "512",
//   "318",
//   "202",
//   "154",
//   "222",
//   "108",
//   "123",
// ]);

springVacation([
  "10",
  "20500",
  "11",
  "1.2",
  "8",
  "13",
  "100",
  "150",
  "500",
  "400",
  "600",
  "130",
  "300",
  "350",
  "200",
  "300",
]);
