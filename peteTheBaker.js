function cakes(recipe, available) {
  arrayToCompare = [];
  // if the recipe contains more items that what is available  return 0
  if (Object.keys(recipe).length > Object.keys(available).length) {
    return 0;
  } else {
    //   push all element of both object in one array
    for (const ingr in recipe) {
      arrayToCompare.push([ingr, recipe[ingr]]);
    }
    for (const ingr in available) {
      arrayToCompare.push([ingr, available[ingr]]);
    }

    const sortedArray = arrayToCompare.sort((last, next) => {
      //  destrocture each string in the array to have them in separate variables,  two per small array so i can compare each element of each  small array
      const [aLast, aFirst] = last;
      const [bLast, bFirst] = next;
      // and then just sort it by alfabetic order
      return aLast > bLast ? 1 : -1;
    });
    // not the nmost eficient way to get the single non duplicate element on the array
    for (var i = 0; i < sortedArray.length; i++) {
      for (var j = i; j < sortedArray.length; j++) {
        if (sortedArray[i][0] != sortedArray[j][0]) {
          result = sortedArray[i];
        }
      }
    }
    // removing that Element
    let index = sortedArray.indexOf(result, 1);
    sortedArray.splice(index, 1);
    console.log(sortedArray);
  }
}

// cakes(
// { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
// { sugar: 500, flour: 2000, milk: 2000 }

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
// const newArr = sortedArray.filter(function(a) {
//   if (sortedArray.indexOf(a) == sortedArray.lastIndexOf(a)) {
// return true;
//   }
// });
