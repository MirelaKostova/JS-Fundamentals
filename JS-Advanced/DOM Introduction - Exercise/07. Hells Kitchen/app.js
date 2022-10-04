// function solve() {
//   document.querySelector("#btnSend").addEventListener("click", onClick);

//   function onClick() {
//     const inputData = JSON.parse(
//       document.querySelector("div#inputs textarea").value
//     );

//     let restaurants = {};

//     for (const data of inputData) {
//       const [restaurantName, workers] = data.split(" - ");
//       let workersData = workers.split(", ");

//       if (!restaurants.hasOwnProperty(restaurantName)) {
//         restaurants[restaurantName] = {};
//       }

//       workersData.forEach((worker) => {
//         let [name, salary] = worker.split(" ");
//         salary = Number(salary);

//         restaurants[restaurantName].workers.push({ name, salary });
//         restaurants[restaurantName].salaries.push(salary);
//       });

//       restaurants[restaurantName].avgSalary = getAvgSalary(
//         restaurants[restaurantName].salaries
//       );
//       restaurants[restaurantName].bestSalary = getBestSalary(
//         restaurants[restaurantName].salaries
//       );
//     }

//     // get the best restaurant
//     let bestRestaurant = getBestRestaurant(restaurants);
//     //  console.log("bestRestaurant ->", bestRestaurant);

//     // print the result
//     document.getElementsByTagName("p")[0].textContent = `Name: ${
//       bestRestaurant[0]
//     } Average Salary: ${bestRestaurant[1].avgSalary.toFixed(
//       2
//     )} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;

//     // print the result - workers
//     const sortedBySalaries = bestRestaurant[1].workers.sort(
//       (a, b) => b[1] - a[1]
//     );
//     sortedBySalaries.forEach((worker) => {
//       worker;
//       let { name, salary } = worker;
//       document.getElementsByTagName(
//         "p"
//       )[1].textContent += `Name: ${name} With Salary: ${salary} `;
//     });
//   }

//   // the best restaurant
//   function getBestRestaurant(restaurants) {
//     return Object.entries(restaurants)
//       .sort((a, b) => b[1].avgSalary - a[1].avgSalary)
//       .shift();
//   }

//   // calculate the best salary
//   function getBestSalary(salary) {
//     return salary.reduce((a, b) => Math.max(a, b));
//   }

//   // calculate the avarage salary
//   function getAvgSalary(salary) {
//     return salary.reduce((a, b) => a + b / salary.length, 0);
//   }
// }

function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let inputData = JSON.parse(
      document.querySelector("div#inputs textarea").value
    );

    let restaurants = {};
    let bestAverageSalary = 0;
    let bestRestaurant = "";

    for (const data of inputData) {
      let [restaurantName, workers] = data.split(" - ");
      let workerData = workers.split(", ");

      for (const worker of workerData) {
        let [name, salary] = worker.split(" ");

        if (!restaurants.hasOwnProperty(restaurantName)) {
          restaurants[restaurantName] = {};
        }
        restaurants[restaurantName][name] = Number(salary);
      }

      let entries = Object.entries(restaurants);

      for (let [name, workers] of entries) {
        let salaries = Object.values(workers);
        let sum = 0;

        for (let salary of salaries) {
          sum += salary;
        }

        let averageSalary = sum / salaries.length;

        if (averageSalary > bestAverageSalary) {
          sum = averageSalary;
          bestRestaurant = name;
        }
      }
    }

    let sorted = Object.entries(restaurants[bestRestaurant]).sort(
      (a, b) => b[1] - a[1]
    );

    let message = [];
    for (const [name, salary] of sorted) {
      message.push(`Name: ${name} With Salary: ${salary}`);
    }
    document.querySelector(
      "#bestRestaurant p"
    ).textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary.toFixed(
      2
    )} Best Salary: ${sorted[0][1].toFixed(2)}`;
    document.querySelector("#workers p").textContent = message;
  }
}
