function solve() {
  const allAddButtons = document.querySelectorAll(".add-product");
  const checkOutButton = document.querySelector(".checkout");
  const resultArea = document.querySelector("textarea");
  const listOfProducts = [];
  const prices = [];

  for (const currButton of allAddButtons) {
    currButton.addEventListener("click", addProduct);
  }

  checkOutButton.addEventListener("click", checkout);

  function addProduct(e) {
    let currProduct = e.currentTarget.parentNode.parentNode;
    let productName = currProduct.querySelector(".product-title");
    let price = currProduct.querySelector(".product-line-price");

    if (!listOfProducts.includes(productName.textContent)) {
      listOfProducts.push(productName.textContent);
    }

    prices.push(Number(price.textContent));

    resultArea.textContent += `Added ${productName.textContent} for ${price.textContent} to the cart.\n`;
  }

  function checkout(e) {
    let totalPrice = prices.reduce((a, b) => a + b, 0);

    resultArea.textContent += `You bought ${listOfProducts.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;

    for (const currButton of allAddButtons) {
      currButton.setAttribute("disabled", "");
      checkOutButton.setAttribute("disabled", "");
    }
  }
}
