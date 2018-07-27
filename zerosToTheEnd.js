// Moving Zeros To The End
let moveZeros = arr => {
  let zerosArr = arr.filter(number => {
    return number === 0;
  });
  let newArray = arr.filter(number => {
    return number !== 0;
  });
  for (e of zerosArr) {
    newArray.push(e);
  }
  return newArray;
};
