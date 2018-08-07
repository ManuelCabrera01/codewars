const inventors = [
  { name: "one", last: "Finance", start: 1990, passed: 2010 },
  { name: "three", category: "auto", start: 1980, passed: 1983 },
  { name: "four", category: "tecnology", start: 1978, passed: 1993 },
  { name: "five", category: "Finance", start: 1970, passed: 2010 },
  { name: "six", category: "aoto", start: 1990, passed: 2003 },
  { name: "seven", category: "retail", start: 1980, passed: 2019 },
  { name: "eith", category: "tecnology", start: 1989, passed: 1990 },
  { name: "nine", category: "aoto", start: 1950, passed: 2003 }
];
const names = [
  "black, glen",
  "backer, carl ",
  "balck, eld",
  "billing, josh",
  "bibal, bur ",
  "birel, austin",
  "blair, robert",
  "blake, willie",
  "barrie, bawell",
  "betsen, lloid",
  "benjamin, walter",
  "ben, gaurion",
  "biden, joshep"
];

const data = [
  "car",
  "car",
  "truck",
  "bike",
  "truck",
  "van",
  "walk",
  "truck",
  "car",
  "walk",
  "bike",
  "van"
];
// find the inventor who were born in the 70s
const inventorFirstname = inventors.filter(
  e => e.start >= 1970 && e.start <= 1979
);
// console.log(inventorFirstname);

// get the inventor first and last name
const firstAndLast = inventors.map(e => `${e.name} and ${e.category}`);

// console.log(firstAndLast);
// sort inventors from youngest to oldest
const yunguestToOldest = inventors.sort((a, b) => (a.year > b.year ? 1 : 0));
// console.log(yunguestToOldest);

// how  many year do they live in total
const howMany = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.start);
}, 0);
// console.log(howMany);

// return how many times a string is repeated in the data array(CLEVER WAY)
const instance = data.reduce((obj, item) => {
  // we set an empty object  to sstart with
  if (!obj[item]) {
    obj[item] = 0;
  }
  // we increment the item if it finds it in the array
  obj[item]++;
  //   we return the object
  return obj;
}, {});
// console.log(instance);

// sort the names array by lastName
const lastNameArray = names.sort((last, next) => {
  const [aLast, aFirst] = last.split(", ");
  const [bLast, bFirst] = next.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(lastNameArray);
