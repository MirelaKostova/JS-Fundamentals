function stringLength(str1, str2, str3) {
  let sum = Number(str1.length + str2.length + str3.length);
  let avgLength = sum / 3;

  console.log(sum);
  console.log(avgLength | 0);
  // or Math.floor
}

stringLength("chocolate", "ice cream", "cake");
