function extractText(text) {
  const items = document.querySelectorAll("ul#items li");
  const textArea = document.querySelector("#result");

  //   console.log("textArea:", textArea);
  for (let currItem of items) {
    // console.log(currItem.textContent);
    textArea.value += currItem.textContent + "\n";
  }
}
