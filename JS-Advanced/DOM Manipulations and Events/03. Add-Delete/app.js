function addItem() {
  let inputTextElement = document.getElementById("newItemText");
  let itemsElements = document.getElementById("items");

  let newLiElement = document.createElement("li");
  newLiElement.textContent = inputTextElement.value;
  inputTextElement.value = "";

  let deleteElem = newLiElement.appendChild(document.createElement("a"));
  deleteElem.href = "#";
  deleteElem.textContent = "[Delete]";

  deleteElem.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });

  newLiElement.appendChild(deleteElem);
  itemsElements.appendChild(newLiElement);
}
