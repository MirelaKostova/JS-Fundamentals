function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const inputData = JSON.parse(
      document.getElementsByTagName("textarea")[0].value
    );

    let restaurants = {};

    for (const data of inputData) {
      const [restaurantName, workers] = data.split(" - ");
      // console.log("workers ->", workers);

      if (!restaurants.hasOwnProperty(restaurantName)) {
        restaurants[restaurantName] = {
          name: restaurantName,
          workers: [],
          salaries: [],
          avgSalary: 0,
          bestSalary: 0,
        };
      }

      let workersData = workers.split(", ");
      for (let worker of workersData) {
        let [name, salary] = worker && worker?.split(" ");

        salary = Number(salary);
        restaurants[restaurantName].salaries.push(salary);
        restaurants[restaurantName].workers.push({ name, salary });
      }

      restaurants[restaurantName].avgSalary = getAvgSalary(
        restaurants[restaurantName].salaries
      );
      restaurants[restaurantName].bestSalary = getBestSalary(
        restaurants[restaurantName].salaries
      );
    }
    //  console.log("restaurants ->", restaurants);
    let bestRestaurant = 0;
    for (let restaurant of Object.entries(restaurants)) {
      if (restaurant.avgSalary > bestRestaurant.avgSalary) {
        bestRestaurant = restaurant;
      }
    }

    let result = getBestRestaurant(restaurants);
    console.log("result ->", result);
    //   console.log(
    //     `Name: ${
    //       bestRestaurant.name
    //     } Average Salary: $${bestRestaurant.avgSalary.toFixed(
    //       2
    //     )} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
    //   );
  }

  function getBestRestaurant(restaurants) {
    let ad = Object.entries(restaurants).sort(
      (a, b) => b.avgSalary - a.avgSalary
    );
    console.log(Object.entries(restaurants));
  }

  function getBestSalary(salary) {
    return salary.reduce((a, b) => Math.max(a, b));
  }

  function getAvgSalary(salary) {
    //  console.log("salary->", salary);
    return salary.reduce((a, b) => a + b / salary.length, 0);
  }
}
