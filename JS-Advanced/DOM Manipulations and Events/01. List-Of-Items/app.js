function addItem() {
  let inputTextElement = document.getElementById("newItemText").value;
  let itemsElements = document.getElementById("items");

  let newLiElement = document.createElement("li");
  newLiElement.textContent = inputTextElement;

  itemsElements.appendChild(newLiElement);
}
