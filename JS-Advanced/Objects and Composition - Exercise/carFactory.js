function carFactory(data) {
  let result = {};
  result.model = data.model;

  engineSetUp(data.power);
  carriageSetUp(data.carriage);
  wheelsSetUp(data.wheelsize);

  //   ----------- engine set up --------------
  function engineSetUp(power) {
    if (power <= 90) {
      result.engine = {
        power: 90,
        volume: 1800,
      };
    } else if (power <= 120) {
      result.engine = {
        power: 120,
        volume: 2400,
      };
    } else {
      result.engine = {
        power: 200,
        volume: 3500,
      };
    }
    return result.engine;
  }

  //   ----------- carriage set up--------------
  function carriageSetUp(carriage) {
    if (carriage === "hatchback") {
      result.carriage = { type: "hatchback", color: data.color };
    } else {
      result.carriage = { type: "coupe", color: data.color };
    }
    return result.carriage;
  }

  //   ----------- wheels set up --------------
  function wheelsSetUp(wheelsize) {
    if (wheelsize % 2 === 0) {
      wheelsize -= 1;
    }
    return (result.wheels = [wheelsize, wheelsize, wheelsize, wheelsize]);
  }
  return result;
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);

/* Output:

{ model: 'VW Golf II', 
  engine: { power: 90, 
            volume: 1800 }, 
  carriage: { type: 'hatchback', 
              color: 'blue' }, 
  wheels: [13, 13, 13, 13] }
 */
