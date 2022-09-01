function ticTacToe(input) {
  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  while (input.length > 0) {
    if (isGameOver()) {
      console.log("The game ended! Nobody wins :(");
      break;
    }

    //--------------------------- first player --------------------------------
    setFirstPlayerMove(input);
    firstPlayerMove(colMove, rowMove);

    if (!firstPlayerMove) {
      setFirstPlayerMove(input);
      firstPlayerMove(colMove, rowMove);
    }

    //--------------------------- second player --------------------------------
    setSecondPlayerMove(input);
    secondPlayerMove(colMove, rowMove);

    if (!secondPlayerMove) {
      setSecondPlayerMove(input);
      secondPlayerMove(colMove, rowMove);
    }
  }

  function setFirstPlayerMove(input) {
    let player = "X";
    let firstPlayer = input
      .shift()
      .split(" ")
      .map((el) => [Number(el)]);

    let colMove = firstPlayer[0];
    let rowMove = firstPlayer[1];

    return colMove, rowMove;
  }

  function setSecondPlayerMove(input) {
    let player = "O";
    let secondPlayer = input
      .shift()
      .split(" ")
      .map((el) => [Number(el)]);

    let colMove = secondPlayer[0];
    let rowMove = secondPlayer[1];

    return colMove, rowMove;
  }

  function firstPlayerMove(col, row) {
    if (!isPlaceTaken) {
      dashboard[col][row] = player;
    } else {
      return false;
    }
  }

  function secondPlayerMove(col, row) {
    if (!isPlaceTaken) {
      dashboard[col][row] = player;
    } else {
      return false;
    }
  }

  function isPlaceTaken(col, row) {
    if (dashboard[col][row] !== false) {
      console.log("This place is already taken. Please choose another!");
      return false;
    }
    return true;
  }

  function isWins() {}

  function isGameOver() {
    let gameover = true;

    dashboard.forEach((row) => {
      for (let el of row) {
        if (el === "false") {
          gameover = false;
        }
      }
    });

    return gameover;
  }
}

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
