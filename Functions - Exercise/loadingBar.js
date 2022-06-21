function loadingBar(percent) {
  if (percent === 100) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  } else {
    let num = percent / 10;
    let printLine = [];

    for (let index = 0; index < num; index++) {
      printLine.push("%");
    }

    for (let j = num + 1; j <= 10; j++) {
      printLine.push(".");
    }

    console.log(`${percent}% [${printLine.join("")}]`);
    console.log("Still loading...");
  }
}

loadingBar(50);
