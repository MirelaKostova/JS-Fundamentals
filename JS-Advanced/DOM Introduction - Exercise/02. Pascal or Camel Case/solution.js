function solve() {
  const input = document.getElementById("text").value.toLowerCase();
  const currentCase = document.getElementById("naming-convention").value;

  let result = [];
  let inputArray = input.split(" ");

  if (currentCase !== "Camel Case" && currentCase !== "Pascal Case") {
    document.getElementById("result").textContent = "Error!";
    return;
  }

  let iterIndex = 0;
  if (currentCase === "Camel Case") {
    result.push(inputArray[0]);
    iterIndex = 1;
  }

  for (let i = iterIndex; i < inputArray.length; i++) {
    let currWord =
      inputArray[i].substring(0, 1).toUpperCase() + inputArray[i].substring(1);

    result.push(currWord);
    console.log(result.join(""));
  }

  document.getElementById("result").textContent = result.join("");
}
