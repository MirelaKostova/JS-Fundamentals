function attachGradientEvents() {
  let gradientElement = document.getElementById("gradient");
  let result = document.getElementById("result");

  const mouseoverHandler = (e) => {
    console.log(e);
    let persantage = Math.trunc((e.offsetX / e.target.clientWidth) * 100);
    result.textContent = `${persantage}%`;
  };

  const mouseoutrHandler = (e) => {
    result.textContent = "";
  };

  gradientElement.addEventListener("mousemove", mouseoverHandler);
  gradientElement.addEventListener("mouseout", mouseoutrHandler);
}
