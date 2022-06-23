function numbers(sequence) {
  let sequenceArr = sequence
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  let top5Numbers = [];

  let sumOfNums = sequenceArr.reduce((a, b) => a + b, 0);
  let avgNum = sumOfNums / sequenceArr.length;

  for (let el of sequenceArr) {
    if (top5Numbers.length >= 5) {
      break;
    }
    if (el > avgNum) {
      top5Numbers.push(el);
    }
  }

  if (top5Numbers.length <= 0) {
    console.log("No");
  } else {
    top5Numbers.sort((a, b) => b - a);
    console.log(top5Numbers.join(" "));
  }
}

// numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
