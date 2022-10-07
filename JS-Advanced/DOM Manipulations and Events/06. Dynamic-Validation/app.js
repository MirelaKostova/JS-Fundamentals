function validate() {
  const inputEmail = document.getElementById("email");
  const pattern = /[a-z]+@[a-z]+.[a-z]+/;

  inputEmail.addEventListener("change", isValid);

  function isValid(e) {
    if (!inputEmail.value.match(pattern)) {
      inputEmail.classList.add("error");
    } else {
      inputEmail.classList.remove("error");
    }
  }
}
