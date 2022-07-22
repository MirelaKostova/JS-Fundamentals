function thePianist(input) {
  // get an integer n
  let n = Number(input.shift());

  let actions = {
    Add: addPiece,
    Remove: remove,
    ChangeKey: changeKey,
  };

  //create collection
  let collection = {};

  // parse input
  // - for next 'n' lines -> "{piece}|{composer}|{key}"
  // - add params to collection
  for (let i = 0; i <= n; i++) {
    let [piece, composer, key] = input.shift().split("|");
    collection[piece] = {
      composer: composer,
      key: key,
    };
  }

  // parse input until the "Stop" command
  while (input[0] !== "Stop") {
    let tokens = input.shift();
    let [command, p1, p2, p3] = tokens.split("|");

    let action = actions[command];

    action(p1, p2, p3);
    // console.log("p1 ->", p1);
    // console.log(collection);

    for (let piece in collection) {
      console.log(
        `${piece} -> Composer: ${collection[piece].composer}, Key: ${collection[piece].key}"`
      );
    }
  }

  // Add piece ()
  function addPiece(piece, composer, key) {
    // console.log(piece);
    if (!collection.hasOwnProperty(piece)) {
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);

      collection[piece] = {
        composer: composer,
        key: key,
      };

      //   console.log(piece, composer, key);
    } else {
      console.log(`${piece} is already in the collection!`);
    }
  }

  // Remove piece ()
  function remove(piece) {
    if (collection.hasOwnProperty(piece)) {
      delete collection[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }

  // ChangeKey ()
  function changeKey(piece, newKey) {
    if (collection.hasOwnProperty(piece)) {
      console.log(`Changed the key of ${piece} to {new key}!`);
      collection[piece].key = newKey;
    } else {
      console.log(
        `Invalid operation! ${piece} does not exist in the collection.`
      );
    }
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
