function commonElements(arr1, arr2) {
  for (const element of arr1) {
    if (arr2.includes(element)) {
      console.log(element);
    }
  }
}
