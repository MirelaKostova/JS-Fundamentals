function cats(catsData) {
  class Cat {
    constructor(catName, age) {
      this.catName = catName;
      this.age = age;
    }

    meow() {
      console.log(`${this.catName}, age ${this.age} says Meow`);
    }
  }

  let catArr = [];

  for (let el of catsData) {
    let currCat = el.split(" ");
    let currCatName = currCat[0];
    let currCatAge = currCat[1];

    let newCat = new Cat(currCatName, currCatAge);
    catArr.push(newCat);
  }

  for (let el of catArr) {
    el.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
