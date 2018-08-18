function to_nato(words) {
  var translate = {
    a: "Alfa ",
    b: "Bravo ",
    c: "Charlie ",
    d: "Delta ",
    e: "Echo ",
    f: "Foxtrot ",
    g: "Golf ",
    h: "Hotel ",
    i: "India ",
    j: "Juliett ",
    k: "Kilo ",
    l: "Lima ",
    m: "Mike ",
    n: "November ",
    o: "Oscar ",
    p: "Papa ",
    q: "Quebec ",
    r: "Romeo ",
    s: "Sierra ",
    t: "Tango ",
    u: "Uniform ",
    v: "Victor ",
    w: "Whiskey ",
    x: "Xray ",
    y: "Yankee ",
    z: "Zulu ",
    "?": "? ",
    ".": ". ",
    " ": "",
    "!": "! "
  };

  return words
    .toLowerCase()
    .split("")
    .map(char => translate[char])
    .join("")
    .trim();
}
