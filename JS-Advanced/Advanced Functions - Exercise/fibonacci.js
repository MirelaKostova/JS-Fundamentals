function getFibonator() {
  let fibonacciArray = [0];
  const number = fibonacciArray.slice[
    fibonacciArray.length > 1 ? -2 : 0
  ].reduce((a, b) => a + b, 0);
  console.log(number);
  //   fibonacciArray.push(number);
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
