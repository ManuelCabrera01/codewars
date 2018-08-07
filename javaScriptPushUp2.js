const people = [
  { name: "wes", year: 1990 },
  { name: "kait", year: 1986 },
  { name: "irv", year: 1970 },
  { name: "lux", year: 2025 },
  { name: "wes", year: 1982 }
];

const comments = [
  { test: "love this", id: 523425 },
  { test: "supper goo", id: 523426 },
  { test: "yur are the best", id: 52354 },
  { test: "freaking love rammen", id: 523286 },
  { test: "nice nice nice", id: 523199 }
];
//checking if any person is older than 19

const isAdult = people.some(person => {
  const currenYear = new Date().getFullYear();
  return currenYear - person.year >= 19;
});
// console.log({ isAdult });

const firstFind = comments.find(e => e.id === 523286);
// console.log(firstFind);

// deleta a specific element by index with lut mutating the original array / creatign a copi  minus the element that i dont want
const index = comments.findIndex(e => e.id === 523199);
console.log(index);
const NewCommentArray = [
  ...comments.slice(index + 1),
  ...comments.slice(0, index)
];
console.log(NewCommentArray);
