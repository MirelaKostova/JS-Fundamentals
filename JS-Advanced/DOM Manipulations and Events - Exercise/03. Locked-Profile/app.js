function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));
  buttons.forEach((button) => button.addEventListener("click", showMore));

  function showMore(e) {
    const currButton = e.target;
    const currProfile = currButton.parentNode;
    const isUnlocked = currProfile.querySelector('input[value="unlock"]');
    const hiddenFields = currProfile.querySelector("div");

    if (isUnlocked.checked) {
      if (currButton.textContent === "Show more") {
        hiddenFields.style.display = "inline-block";
        e.target.textContent = "Hide it";
      } else {
        hiddenFields.style.display = "none";
        e.target.textContent = "Show more";
      }
    }
  }
}
