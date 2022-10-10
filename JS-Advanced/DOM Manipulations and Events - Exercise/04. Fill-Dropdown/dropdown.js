function addItem() {
  const text = document.getElementById("newItemText").value;
  const newItemValue = document.getElementById("newItemValue").value;
  const dropDownMenu = document.getElementById("menu");

  const newOptionElement = document.createElement("option");
  newOptionElement.textContent = text;
  newOptionElement.value = newItemValue;
  dropDownMenu.appendChild(newOptionElement);

  document.getElementById("newItemText").value = "";
  document.getElementById("newItemValue").value = "";
}
