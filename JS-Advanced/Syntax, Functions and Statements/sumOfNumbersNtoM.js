function sumOfNumbersNtoM(n, m) {
  n = Number(n);
  m = Number(m);

  let result = 0;

  for (let i = n; i <= m; i++) {
    result += i;
  }

  return result;
}

sumOfNumbersNtoM("1", "5");
// 15

sumOfNumbersNtoM("-8", "20");
// 174
