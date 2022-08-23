function makeADictionary(jsonArr) {
  let arrayOfObjs = [];
  let tempArr = [];

  class DictionaryWords {
    constructor(term, description) {
      this.term = term;
      this.description = description;
    }
  }

  jsonArr.forEach((element) => {
    let convertedToObj = JSON.parse(element);
    arrayOfObjs.push(convertedToObj);
  });

  for (const el of arrayOfObjs) {
    let term = Object.keys(el);
    let description = Object.values(el);

    let newTerm = new DictionaryWords(term, description);
    tempArr.push(newTerm);
  }

  let sortedDictionary = tempArr.sort((a, b) => (a.term < b.term ? -1 : 1));

  let myObj = {};

  for (const currTerm of sortedDictionary) {
    myObj[currTerm.term] = currTerm.description;
  }

  for (const currElem of Object.keys(myObj)) {
    console.log(`Term: ${currElem} => Definition: ${myObj[currElem]}`);
  }
}

makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
