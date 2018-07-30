function toCamelCase(str) {
  let splitArr = [];
  let firstWord = [];
  let firstWordTU = [];

  if (str === "") {
    return "";
  } else {
    for (var i = 0; i <= str.length; i++) {
      if (str.charAt(i) === "_") {
        splitArr = str.split("_");
      } else if (str.charAt(i) === "-") {
        splitArr = str.split("-");
      }
    }

    firstWord = splitArr[0];
    firstWordTU = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

    capitalize = splitArr.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    });

    if (capitalize[0] !== firstWord) {
      capitalize[0] = firstWord;
    }

    return capitalize.join("");
  }
}
