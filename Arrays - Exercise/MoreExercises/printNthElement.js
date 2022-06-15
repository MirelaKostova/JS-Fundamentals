function printNthElement(arr) {
  let n = Number(arr[arr.length - 1]);
  let printLine = [];

  for (let i = 0; i < arr.length - 1; i += n) {
    printLine.push(arr[i]);
  }
  console.log(printLine.join(" "));
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
printNthElement(["dsa", "asd", "test", "test", "2"]);
