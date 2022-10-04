function deleteByEmail() {
  const mails = document.querySelectorAll("tr td:nth-of-type(2)");
  const emailInput = document.querySelector("input[name='email']");
  const result = document.querySelector("#result");

  const matchedEmail = Array.from(mails).find(
    (x) => x.textContent === emailInput.value
  );

  if (matchedEmail) {
    matchedEmail.parentNode.remove();
    result.textContent = "Deleted";
  } else {
    result.textContent = "Not found.";
  }
}
