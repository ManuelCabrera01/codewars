function scramble(str1, str2) {
  const finalarray = [];

  //spliting both arrays / and sorting them
  let toCompare = str2.split("");
  let toGet = str1.split("");

  //nesting two forEach to compare each element of esch array to retuen a single array with the element that match
  toCompare.forEach(elementTocCompare => {
    toGet.forEach(elementToGet => {
      if (elementTocCompare === elementToGet) {
        finalarray.push(elementTocCompare);
      }
      //   if (elementTocCompare !== elementToGet) {
      //     toCompare.splice(elementTocCompare, 1);
      //   }
    });
  });
  console.log(toCompare);
  console.log(finalarray);
  //   compare the lenght of the arrays
  if (finalarray.length >= toCompare.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// scramble("jscripts", "javascript");
//false
scramble("katas", "steak");
//true

// [ stak' ]
