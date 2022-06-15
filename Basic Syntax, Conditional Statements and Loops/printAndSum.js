function printAndSum(startNum, endNum) {
  let sum = 0;
  let printLine = "";
  for (let index = startNum; index <= endNum; index++) {
    printLine += index + " ";
    sum += index;
  }
  console.log(printLine);
  console.log(`Sum: ${sum}`);
}
