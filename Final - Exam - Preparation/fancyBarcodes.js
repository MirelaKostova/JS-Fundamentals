function fancyBarcodes(input) {
  let n = Number(input.shift());
  let pattern = /(@#+)(?<validCode>[A-Z][a-zA-Z0-9]{4,}[A-Z])(@#+)/g;

  for (let i = 0; i < n; i++) {
    let group = "00";
    let match = pattern.exec(input[i]);

    if (match == null) {
      console.log(`Invalid barcode`);
    }

    while (match !== null) {
      let barcode = match.groups.validCode;
      let code = barcode.replace(/\D/g, "");

      if (code.length > 0) {
        group = code;
      }
      console.log(`Product group: ${group}`);
      match = pattern.exec(input[i]);
    }
  }
}

// fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
