function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const inputData = JSON.parse(
      document.querySelector("div#inputs textarea").value
    );
    const bestRestorantInput = document.getElementsByTagName("p")[0];
    const workersInput = document.getElementsByTagName("p")[1];
    bestRestorantInput.textContent = "";
    workersInput.textContent = "";

    let restaurants = {};
    let index = 0;

    for (const data of inputData) {
      const [restaurantName, workers] = data.split(" - ");
      let workersData = workers.split(", ");

      workersData.forEach((worker) => {
        let [name, salary] = worker.split(" ");
        salary = Number(salary);

        if (!restaurants.hasOwnProperty(restaurantName)) {
          restaurants[restaurantName] = {
            name: restaurantName,
            workers: [],
            salaries: [],
            avgSalary: 0,
            bestSalary: 0,
            index: index,
          };
        }

        restaurants[restaurantName].workers.push({ name, salary });
        restaurants[restaurantName].salaries.push(salary);
      });

      restaurants[restaurantName].avgSalary = getAvgSalary(
        restaurants[restaurantName].salaries
      );
      restaurants[restaurantName].bestSalary = getBestSalary(
        restaurants[restaurantName].salaries
      );

      index++;
    }

    // get the best restaurant
    let bestRestaurant = getBestRestaurant(restaurants);
    console.log("bestRestaurant ->", bestRestaurant);

    // print the result
    bestRestorantInput.textContent = `Name: ${
      bestRestaurant[0]
    } Average Salary: ${bestRestaurant[1].avgSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;

    // print the result - workers
    const sortedBySalaries = bestRestaurant[1].workers.sort(
      (a, b) => b[1] - a[1]
    );
    sortedBySalaries.forEach((worker) => {
      worker;
      let { name, salary } = worker;
      workersInput.textContent += `Name: ${name} With Salary: ${salary} `;
    });
  }

  // the best restaurant
  function getBestRestaurant(restaurants) {
    return Object.entries(restaurants)
      .sort(
        (a, b) => b[1].avgSalary - a[1].avgSalary || b[1].index - a[1].index
      )
      .shift();
  }

  // calculate the best salary
  function getBestSalary(salary) {
    return salary.reduce((a, b) => Math.max(a, b));
  }

  // calculate the avarage salary
  function getAvgSalary(salary) {
    return salary.reduce((a, b) => a + b / salary.length, 0);
  }
}
