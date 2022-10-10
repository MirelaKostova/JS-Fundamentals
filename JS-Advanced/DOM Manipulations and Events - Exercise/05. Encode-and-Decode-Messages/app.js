function encodeAndDecodeMessages() {
  const encodeArea = document.querySelector("#main > div:nth-child(1)");
  const decodeArea = document.querySelector("#main > div:nth-child(2)");
  const textAreaEncode = encodeArea.querySelector("textarea");
  const textAreaDecode = decodeArea.querySelector("textarea");

  encodeArea.querySelector("button").addEventListener("click", encode);
  decodeArea.querySelector("button").addEventListener("click", decode);

  let decodedMessage = "";

  function encode(e) {
    // console.log("textAreaEncode.value ->", textAreaEncode);
    // console.log("textAreaDecode ->", textAreaDecode);
    decodedMessage = textAreaEncode.value;
    let encodedMsg = "";
    for (let i = 0; i < decodedMessage.length; i++) {
      const currChar = decodedMessage[i].charCodeAt();
      encodedMsg += String.fromCharCode(currChar + 1);
    }
    textAreaDecode.value = encodedMsg;
    textAreaEncode.value = "";
  }

  function decode() {
    textAreaDecode.value = decodedMessage;
  }
}
