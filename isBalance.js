function isBalanced(string, caps) {
  // creating my variables
  let i;
  let stack = [];

  for (var c of string) {
    // iterating throug the string and sering i equal the the index of each element
    i = caps.indexOf(c);

    if (i === -1) continue;
    else if (stack.length && stack[0] === caps.lastIndexOf(c) - 1)
      stack.shift();
    else stack.unshift(i);
  }

  return !stack.length;
}
