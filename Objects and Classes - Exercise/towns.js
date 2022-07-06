function towns(arr) {
  for (const el of arr) {
    let townInfo = {};
    let currTownInfo = el.split(" | ");
    townInfo.town = currTownInfo[0];
    townInfo.latitude = Number(currTownInfo[1]).toFixed(2);
    townInfo.longitude = Number(currTownInfo[2]).toFixed(2);

    console.log(townInfo);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
