function solve() {
  const [buttonGenerate, buttonBuy] = Array.from(
    document.querySelectorAll("button")
  );
  const [input, output] = Array.from(document.querySelectorAll("textarea"));
  const tbody = document.querySelector("tbody");

  buttonGenerate.addEventListener("click", generate);
  buttonBuy.addEventListener("click", buy);

  function generate() {
    const items = JSON.parse(input.value);

    items.forEach((item) => {
      const row = document.createElement("tr");

      row.appendChild(createColumn("img", item.img));
      row.appendChild(createColumn("p", item.name));
      row.appendChild(createColumn("p", item.price));
      row.appendChild(createColumn("p", item.decFactor));

      // --------- input chechbox-----------
      const checkboxDataElement = document.createElement("td");
      const inputDataElement = document.createElement("input");
      inputDataElement.type = "checkbox";
      checkboxDataElement.appendChild(inputDataElement);
      row.appendChild(checkboxDataElement);

      tbody.appendChild(row);
    });

    function createColumn(type, content) {
      const tdElement = document.createElement("td");
      let inner;

      if (type == "img") {
        inner = document.createElement("img");
        inner.src = content;
      } else {
        inner = document.createElement("p");
        inner.textContent = content;
      }
      tdElement.appendChild(inner);

      return tdElement;
    }
  }

  function buy() {
    const chechboxArray = Array.from(
      document.querySelectorAll("tbody input")
    ).filter((checkbox) => checkbox.checked);

    const boughtItemsNames = [];
    let avgDecFactor = 0;
    let totalPrice = 0;

    for (const checkbox of chechboxArray) {
      const [name, price, decFactor] =
        checkbox.parentElement.parentElement.querySelectorAll("td p");

      // console.log(name, price, decFactor);
      boughtItemsNames.push(name.textContent);
      totalPrice += Number(price.textContent);
      avgDecFactor += Number(decFactor.textContent);
    }

    avgDecFactor /= boughtItemsNames.length;

    // --------- output -----------
    output.textContent =
      `Bought furniture: ${boughtItemsNames.join(", ")}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${avgDecFactor}`;
  }
}

/*
function solve() {
  const buttonGenerate = document.querySelector("button:nth-child(3)");
  const buttonBuy = document.querySelector("button:nth-child(6)");

  buttonGenerate.addEventListener("click", generateHandler);
  buttonBuy.addEventListener("click", buyHandler);

  const input = document.querySelector("textarea:nth-child(2)");
  const output = document.querySelector("textarea:nth-child(5)");

  function generateHandler() {
    const items = JSON.parse(input.value);

    for (const item of items) {
      const row = document.createElement("tr");
      // --------- image element-----------
      const imageDataElement = document.createElement("td");
      const imageElement = document.createElement("img");
      imageDataElement.appendChild(imageElement);
      row.appendChild(imageDataElement);

      // --------- name element-----------
      const nameDataElement = imageDataElement.cloneNode();
      const nameElementParagh = document.createElement("p");
      nameDataElement.appendChild(nameElementParagh);
      row.appendChild(nameDataElement);

      // --------- price element-----------
      const priceDataElement = nameDataElement.cloneNode(true);
      row.appendChild(priceDataElement);

      // --------- decoration factor elememt-----------
      const decFactorDataElement = priceDataElement.cloneNode(true);
      row.appendChild(decFactorDataElement);

      // --------- input chechbox-----------
      const checkboxDataElement = decFactorDataElement.cloneNode();
      const inputDataElement = document.createElement("input");
      inputDataElement.type = "checkbox";
      checkboxDataElement.appendChild(inputDataElement);
      row.appendChild(checkboxDataElement);

      // --------- set attributes -----------
      // imageElement.setAttribute("class", "image");
      // nameElementParagh.setAttribute("class", "name");
      // priceDataElement.setAttribute("class", "price");
      // decFactorDataElement.setAttribute("class", "decFactor");
      // inputDataElement.setAttribute("class", "checkbox");

      // --------- set values -----------
      imageElement.src = item.img;
      nameElementParagh.textContent = item.name;
      priceDataElement.children[0].textContent = item.price;
      decFactorDataElement.children[0].textContent = item.decFactor;

      document.querySelector("tbody").appendChild(row);
      // console.log(row);
    }
  }

  function buyHandler() {
    const chechboxArray = Array.from(
      document.querySelectorAll("tbody input")
    ).filter((checkbox) => checkbox.checked);

    const boughtItemsNames = [];
    let avgDecFactor = 0;
    let totalPrice = 0;

    for (const checkbox of chechboxArray) {
      const [name, price, decFactor] =
        checkbox.parentElement.parentElement.querySelectorAll("td p");

      // console.log(name, price, decFactor);
      boughtItemsNames.push(name.textContent);
      totalPrice += Number(price.textContent);
      avgDecFactor += Number(decFactor.textContent);
    }

    avgDecFactor /= boughtItemsNames.length;

    // --------- output -----------
    output.textContent =
      `Bought furniture: ${boughtItemsNames.join(", ")}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${avgDecFactor}`;
  }
}
*/
