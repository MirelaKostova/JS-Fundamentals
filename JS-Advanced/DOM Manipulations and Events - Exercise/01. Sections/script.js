function create(input) {
  const sectionsElement = document.getElementById("content");

  for (const section of input) {
    //create div and p elements
    const currSectionDiv = document.createElement("div");
    const currParagraph = document.createElement("p");
    const text = document.createTextNode(section);

    const showParagraphs = (e) =>
      (e.target.children[0].style.display = "inline");

    //each p is initially hidden
    currParagraph.appendChild(text);
    currParagraph.style.display = "none";
    currSectionDiv.appendChild(currParagraph);

    currSectionDiv.addEventListener("click", showParagraphs);
    sectionsElement.appendChild(currSectionDiv);
  }
}
