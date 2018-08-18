function wave(str) {
  let arr = [];
  str.split("").forEach((l, i) => {
    let strArr = str.split("");
    if (/[a-z]/.test(l)) {
      strArr[i] = strArr[i].toUpperCase();
      arr.push(strArr.join(""));
    }
  });
  return arr;
}
// console.log(wave(str));
