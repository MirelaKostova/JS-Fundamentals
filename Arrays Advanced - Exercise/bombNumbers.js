function bombNumbers(numbers, bomb) {
  let newArr = numbers.slice();
  let indexOfBomb = newArr.indexOf(bomb[0]);
  let k = bomb[1];

  function detonation(newArr, indexOfBomb) {
    newArr.splice(indexOfBomb + 1, k);
    newArr.splice(indexOfBomb - k, k + 1);
  }

  for (let element of newArr) {
    if (element === numbers[indexOfBomb]) {
      let newBombIndex = newArr.indexOf(element);
      newArr = detonation(newArr, newBombIndex);
    }
  }

  let sum = 0;
  for (let el of finalArr) {
    sum += Number(el);
  }

  console.log(sum);
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
