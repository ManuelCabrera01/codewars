let myArray = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

function unique(arr) {
  for (let el of new Set(arr)) {
    console.log(el);
  }
}

unique(myArray);
