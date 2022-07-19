function asciiSumator(input) {
  let firstCharCode = input[0].charCodeAt();
  let secondCharCode = input[1].charCodeAt();
  let strArr = input[2].split("");
  let sum = 0;

  //   console.log(firstCharCode);
  //   console.log(secondCharCode);

  let startCode = Math.min(firstCharCode, secondCharCode);
  let endCode = Math.max(firstCharCode, secondCharCode);

  for (const el of strArr) {
    let currCh = el.charCodeAt();

    if (currCh > startCode && currCh < endCode) {
      sum += Number(el.charCodeAt());
    }
  }

  console.log(sum);
}

// asciiSumator([".", "@", "dsg12gr5653feee5"]);
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
