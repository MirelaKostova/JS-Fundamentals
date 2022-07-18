function cutAndReverse(string) {
  const reversedArr = string.split("").reverse().join("");

  let firstSlice = reversedArr.slice(reversedArr.length / 2);
  let secondSlice = reversedArr.slice(0, reversedArr.length / 2);

  console.log(firstSlice);
  console.log(secondSlice);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
