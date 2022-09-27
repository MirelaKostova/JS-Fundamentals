function createSortedList() {
  return {
    result: [],
    add(element) {
      this.result.push(element);
      this.result.sort((a, b) => a - b);
    },

    remove(index) {
      if (index >= 0 && index < this.result.length) {
        this.result.splice(index, 1);
      }
    },

    get(index) {
      if (index >= 0 && index < this.result.length) {
        return this.result[index];
      }
    },
    get size() {
      return this.result.length;
    },
  };
}

let list = createSortedList();

list.add(5);

list.add(6);
list.add(7);
console.log(list.get(1));

list.remove(1);
console.log(list.get(1));
