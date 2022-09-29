function sumTable() {
  const table = document.querySelectorAll("table tr");

  let total = 0;
  for (let i = 1; i < table.length; i++) {
    const cols = table[i].children;
    let currPrice = cols[cols.length - 1].textContent;
    total += Number(currPrice);
  }

  document.querySelector("#sum").textContent = total;
}

// function sumTable() {
//     const prices = document.querySelectorAll("table td");

//     let total = 0;

//     for (let i = 0; i < prices.length; i++) {
//       if (i % 2 !== 0) {
//         const currPrice = Number(prices[i].textContent);
//         total += currPrice;
//       }
//     }

//     document.querySelector("#sum").textContent = total;
//   }
