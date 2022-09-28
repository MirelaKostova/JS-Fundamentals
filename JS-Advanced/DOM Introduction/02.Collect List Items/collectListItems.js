function extractText(text) {
  const items = document.querySelectorAll("ul#items li");
  const textArea = document.querySelector("#result");

  //   console.log("textArea:", textArea);

  for (let currItem of items) {
    //   textArea.value += currItem.textContent;
    // console.log(currItem.textContent);
    textArea.value += currItem.textContent + "\n";
  }
}
