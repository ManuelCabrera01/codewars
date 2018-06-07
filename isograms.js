function isIsogram(str){
  var toArray =str.toLowerCase().split('').sort()
  console.log(toArray)
   return toArray.length === new Set(toArray).size;
}
