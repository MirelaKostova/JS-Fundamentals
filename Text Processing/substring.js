function substring(str, startNum, count) {
  const endNum = startNum + count;

  console.log(str.substring(startNum, endNum));
}

substring("ASentence", 1, 8);
