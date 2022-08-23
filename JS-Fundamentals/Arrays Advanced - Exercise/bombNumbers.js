function bombNumbers(numbers, bomb) {
  let newArr = numbers.slice();
  let indexOfBomb = newArr.indexOf(bomb[0]);
  let power = bomb[1];
  let sum = 0;

  function detonation() {
    let startExplosioIndex = Math.max(0, indexOfBomb - power);
    let explosionLength = power * 2 + 1;
    newArr.splice(startExplosioIndex, explosionLength);
    return newArr;
  }

  while (indexOfBomb != -1) {
    newArr = detonation(newArr);
    indexOfBomb = newArr.indexOf(bomb[0]);
  }
  newArr.forEach((el) => {
    sum += el;
  });

  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
