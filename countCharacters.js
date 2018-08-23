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

/// i like this solution in  codeWars solution
// function count (string) {
//     return string.split('').reduce(function(counts,char){
//       counts[char] = (counts[char]||0) + 1;
//       return counts;
//     },{});
//   }
