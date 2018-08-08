const findMyWord = (wordToMatch, array) => {
  return array.filter(element => {
    //here i need to figure it out if the element match with the wordToMatch by creating a new RegExp ta take the  word and adding the properti of global and insensiteve
    const regex = new RegExp("wordToMatch", "gi");
    // and then we retunr the element that match the regex created before
    return element.match(regex);
  });
};
