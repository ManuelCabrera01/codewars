function isBalanced(string, sing) {
  // creating my variables/
  let i;
  let stack = [];
  for (let c of string) {
    // iterating throug the string and sering i equal the the index of each element
    i = sing.indexOf(c);
    // here if the element match  with the previous element keep iterating
    if (i === -1) continue;
    // check if the begging of the stack and the of the stack is equal to the last index of the sing string, if so remove it
    else if (stack.length && stack[0] === sing.lastIndexOf(c) - 1) {
      stack.shift();
      // if not addit the the stack array
    } else stack.unshift(i);
  }

  console.log(!stack.length);
}
// isBalanced("(Sensei says yes!)", "()");
isBalanced("(Sensei says no!", "()");
