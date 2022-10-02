function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const stringToCheck = document.getElementById("searchField").value;
    const dataRows = document.querySelectorAll("tbody tr");

    document.getElementById("searchField").value = "";

    for (const currRow of dataRows) {
      currRow.classList.remove("select");
      if (currRow.innerText.includes(stringToCheck)) {
        currRow.className = "select";
      }
    }
  }
}
