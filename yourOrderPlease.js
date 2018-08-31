function order(words) {
  let myArray = [];
  myREg = /\d/g;
  myArray.push(words.match(myREg));

  console.log(myArray);
}

order("is1 Thi1s T4est 3a");
