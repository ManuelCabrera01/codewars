let to_nato = words => {
  let originalArray = words.split("");
  let finalarray = [];
  let pilotArr = [
    "Alfa",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliett",
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Papa",
    "Quebec",
    "Romeo",
    "Sierra",
    "Tango",
    "Uniform",
    "Victor",
    "Whiskey",
    "X-ray",
    "Yankee",
    "Zulu"
  ];
  originalArray.forEach(originalWord => {
    pilotArr.forEach(pilotWord => {
      if (originalWord === pilotWord) {
        finalarray.push(elementTocCompare);
      }
    });
  });
  console.log(finalarray);
};

let input = "If you can read";
to_nato(input);
