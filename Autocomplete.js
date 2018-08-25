var one = "Ai";
var array = ["airpla$#%#$ne", "aIrp@###ort", "ap[]][ple", "ball"];

let autocomplete = (input, dictionary) => {
  let matches = [];
  let firstRegex = new RegExp(/[^A-Za-z]/g);
  let secondRegex = new RegExp(input, "gi");

  //cleaning theincput array  from any signbol
  let cleanARray = dictionary.map(dirtyW => {
    return dirtyW.replace(firstRegex, "");
  });

  cleanARray.forEach(element => {
    var origin = element.match(secondRegex);
    matches.push(element.match(`${secondRegex}`));
  });
  console.log(matches);
};
autocomplete(one, array);
