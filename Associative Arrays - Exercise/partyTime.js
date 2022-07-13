function partyTime(arr) {
  let array = arr.slice();
  let reservationLists = new Map();

  // Loop through the array and create list with the guests invitations before command "PARTY".
  for (const invitation of array) {
    let firstChar = invitation.charAt(0);

    if (invitation === "PARTY") {
      break;
    } else {
      if (!isNaN(Number(firstChar))) {
        reservationLists.set(invitation, "VIP");
      } else {
        reservationLists.set(invitation, "regular");
      }
    }
    array.shift(array);
  }

  // shift() to remove commandline "PARTY"
  array.shift();

  // console.log(reservationLists);
  console.log(array);

  for (let guest of array) {
    if (reservationLists.has(guest)) {
      reservationLists.delete(guest);
    }
  }
  // console.log(reservationLists);
  // Print the count of guests
  console.log(reservationLists.size);
  // console.log(guestCounter);

  // print all guests, who didn't come to the party. VIP first
  let sorted = Array.from(reservationLists.entries()).sort(
    ([k1, v1], [k2, v2]) => {
      v1 === "VIP" ? 1 : -1;
      v2 === "VIP" ? 1 : -1;
    }
  );

  sorted.forEach((el) => console.log(el[0]));
}

// partyTime([
//   "7IK9Yo0h",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
//   "tSzE5t0p",
//   "PARTY",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
// ]);

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
