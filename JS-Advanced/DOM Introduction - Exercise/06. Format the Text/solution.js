function solve() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  const sentencesArr = input.split(".").filter((x) => x !== "");

  let formattedText = "";
  for (let i = 0; i < sentencesArr.length; i += 3) {
    const paragraph = sentencesArr.slice(i, 3 + i).join(".");
    formattedText += "<p>" + paragraph + "." + "</p>";
  }
  // console.log(formattedText);
  output.innerHTML = formattedText;
}
