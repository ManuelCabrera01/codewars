function tribonacci(signature, n) {
  let arr = signature;
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else {
    let a = signature[0];
    let b = signature[1];
    let c = signature[2];
    let next = c;

    for (let i = 1; i <= n - 3; i++) {
      next = a + b + c;
      a = b;
      b = c;
      c = next;
      arr.push(next);
    }
  }
  return arr;
}

let myarr = [1, 2, 3];
tribonacci(myarr, 1);
