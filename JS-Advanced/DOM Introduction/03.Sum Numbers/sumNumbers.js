function calc() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  //   console.log("num1 ->", num1);
  //   console.log("num2 ->", num2);
  let sum = Number(num1) + Number(num2);
  document.getElementById("sum").value = sum;
}
