const romanNumeral = letter => {
  const romanNumeralConverter = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  for (roman in romanNumeralConverter) {
    if (letter === roman) {
      return romanNumeralConverter[roman];
    }
  }
  return null;
};

module.exports = romanNumeral;
