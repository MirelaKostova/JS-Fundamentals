function addAndRemove(arr) {
  let printLine = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      printLine.push(i + 1);
    } else if (arr[i] === "remove") {
      printLine.pop();
      continue;
    }
  }

  if (printLine.length != 0) {
    console.log(printLine.join(" "));
  } else {
    console.log("Empty");
  }
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
