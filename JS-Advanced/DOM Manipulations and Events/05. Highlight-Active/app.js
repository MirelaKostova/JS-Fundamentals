function focused() {
  const sectionsElement = document.querySelectorAll("div input");

  const onFocus = (e) => e.currentTarget.parentNode.classList.add("focused");
  const onBlur = (e) => e.currentTarget.parentNode.classList.remove("focused");

  for (const element of sectionsElement) {
    element.addEventListener("focus", onFocus);
    element.addEventListener("blur", onBlur);
  }
}
