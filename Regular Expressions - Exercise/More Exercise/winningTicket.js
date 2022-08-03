function winningTicket(input) {
  const jackpotPattern = /[@#$^]{10}/g;
  const winningPattern = /[#$^@]{6}/g;

  let tickets = input.split(", ");

  for (let ticket of tickets) {
    if (isValid(ticket)) {
      if (ticket.match(jackpotPattern)) {
        console.log(`ticket "${ticket}" - ${ticket.length / 2}$ Jackpot!`);
      } else if (isWinning(ticket)) {
        let leftHalf = ticket.substring(0, ticket.length / 2);
        let matchingSymbols = leftHalf.replace(/\w/g, "");
        // console.log(matchingSymbols);
        // let count = 1;
        // let symbol = "";

        // for (let i = 0; i < matchingSymbols.length; i++) {
        //   if (matchingSymbols[i] === matchingSymbols[i + 1]) {
        //     count++;
        //     symbol = matchingSymbols[i + 1];
        //   }
        // }
        console.log(
          `ticket "${ticket}"- ${matchingSymbols.length}${matchingSymbols[0]}`
        );
      } else {
        `ticket "${ticket}" - no match`;
      }
    } else {
      console.log("invalid ticket");
    }
  }

  function isValid(ticket) {
    if (ticket.length == 20) {
      return true;
    }
  }

  function isWinning(ticket) {
    let leftHalf = ticket.substring(0, ticket.length / 2);
    let rigthHalf = ticket.substring(ticket.length / 2);

    let matchLeft = leftHalf.match(winningPattern);
    let matchRigth = rigthHalf.match(winningPattern);

    if (matchLeft && matchRigth) {
      return true;
    }
  }
}

// winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
winningTicket("validticketnomatch:(");
