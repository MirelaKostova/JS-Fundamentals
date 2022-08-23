function searchForANumber(first, second) {
  let elementsCount = second[0];
  let elementsToDelete = second[1];
  let number = second[2];

  let newArr = first.slice(0, elementsCount);
  newArr.splice(0, elementsToDelete);

  let counter = 0;
  for (let el of newArr) {
    if (el === number) {
      counter++;
    }
  }
  console.log(`Number ${number} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
