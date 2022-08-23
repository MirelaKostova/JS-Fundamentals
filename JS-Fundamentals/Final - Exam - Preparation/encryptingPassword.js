function encryptingPassword(input) {
  let numberPasswords = Number(input.shift());

  let pattern =
    /(.+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^<>]{3})|<\1/;

  for (let i = 0; i < numberPasswords; i++) {
    let valid = pattern.exec(input[i]);

    if (valid) {
      let { first, second, third, fourth } = valid.groups;
      let encryptedPassword = first + second + third + fourth;

      console.log(`Password: ${encryptedPassword}`);
    } else {
      console.log(`Try another password!`);
    }
  }
}

encryptingPassword([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);

// encryptingPassword([
//   "5",
//   "aa>111|mqu|BAU|mqu<aa",
//   "()>111!aaa!AAA!^&*<()",
//   "o>088|abc|AAA|***<o",
//   "asd>asd|asd|ASD|asd<asd",
//   "*>088|zzzz|ZzZ|123<*",
// ]);
