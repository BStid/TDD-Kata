let stringCalculator = (string1, string2) => {
  if (string1) {
    let newNumber = parseInt(string1);
    if (string2) {
      let newNumber2 = parseInt(string2);
      return newNumber + newNumber2;
    }
    return newNumber;
  }
  return 0;
};

module.exports = stringCalculator;
