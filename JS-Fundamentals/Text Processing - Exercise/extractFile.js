function extractFile(path) {
  let pathArr = path.split("\\").pop().split(".");

  let extension = pathArr.pop();
  let fileName = pathArr.join(".");

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
