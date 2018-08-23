function count(string) {
  let ar = string.split("").sort();

  let result = {};
  for (var i = 0; i < ar.length; ++i) {
    if (!result[ar[i]]) result[ar[i]] = 0;
    ++result[ar[i]];
  }
  return result;
}
const strOne = "abbbbbbba";

count(strOne);
