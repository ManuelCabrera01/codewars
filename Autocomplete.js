// RegExp

var one = "Ap";
var array = ["airpla$#%#$ne", "airp@###ort", "ap[]][ple", "ball"];

let autocomplete = (input, dictionary) => {
  let cleanARray = dictionary
    .map(dirtyW => {
      return dirtyW.replace(/[^A-Za-z]/g, "");
    })
    .filter(cleanW => {
      return cleanW.includes(input);
    });

  return cleanARray;
};
console.log(autocomplete(one, array));
