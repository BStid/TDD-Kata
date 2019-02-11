//Convert Roman Numeral into a Number

const romanNumeral = letter => {
  return typeof letter === "string" ? checkMultipleRomanNumerals(letter) : 0;
};
const checkMultipleRomanNumerals = letter => {
  let letterArray = letter.split("");
  let length = letterArray.length;
  let addedNumber = 0;

  for (let index = 0; index < length; index++) {
    let currentNumber = convertRomanNumeral(letterArray[index]);
    let nextNumber = convertRomanNumeral(letterArray[index + 1]);
    if (currentNumber < nextNumber) {
      currentNumber = nextNumber - currentNumber;
      index++;
    }
    addedNumber += currentNumber;
  }
  return addedNumber;
};
const convertRomanNumeral = letter => {
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
