function palindromeIntegers(arr) {
  for (let num of arr) {
    let isPalindrome = false;
    let current = String(num);
    let reversed = String(num).split("").reverse().join("");

    if (current === reversed) {
      isPalindrome = true;
    }

    console.log(isPalindrome ? true : false);
  }
}

palindromeIntegers([123, 323, 421, 121]);
