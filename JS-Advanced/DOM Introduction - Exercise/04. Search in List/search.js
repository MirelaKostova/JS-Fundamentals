function search() {
  const towns = document.querySelectorAll("#towns li");
  const searchText = document.getElementById("searchText").value;

  let matches = 0;

  for (let currElement of towns) {
    let currTown = currElement.textContent;

    if (currTown.includes(searchText)) {
      currElement.style.textDecoration = "underline";
      currElement.style.fontWeight = "bold";
      matches++;
    } else {
      currElement.style.textDecoration = "none";
      currElement.style.fontWeight = "normal";
    }
  }

  document.getElementById("result").textContent = `${matches} matches found`;
}
