function filterEmployees(JSONinput, criteriaData) {
  const parsedInput = JSON.parse(JSONinput);
  const [criteria, value] = criteriaData.split("-");

  parsedInput
    .filter((x) => x[criteria] == value)
    .map((currEmployee, i) => {
      console.log(
        `${i}. ${currEmployee.first_name} ${currEmployee.last_name} - ${currEmployee.email}`
      );
    });
}

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);

/*
function filterEmployees(JSONinput, criteriaData) {
    const parsedInput = JSON.parse(JSONinput);
    const [criteria, value] = criteriaData.split("-");
  
    if (criteriaData !== "all") {
      parsedInput
        .filter((x) => x[criteria] == value)
        .map((currEmployee, i) => {
          console.log(
            `${i}. ${currEmployee.first_name} ${currEmployee.last_name} - ${currEmployee.email}`
          );
        });
    } else {
      parsedInput.map((currEmployee, i) => {
        console.log(
          `${i}. ${currEmployee.first_name} ${currEmployee.last_name} - ${currEmployee.email}`
        );
      });
    }
  }
*/
