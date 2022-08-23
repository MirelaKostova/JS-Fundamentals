function condenseArrayToNumber(arr) {
  let result = arr.slice();

  while (result.length > 1) {
    let tempArr = [];

    for (let i = 0; i < result.length - 1; i++) {
      tempArr.push(result[i] + result[i + 1]);
    }
    result = tempArr.slice();
  }
  console.log(result.join());
}
