const fizzBuzz = number => {
  if (number % 2 === 0) {
    return number % 3 === 0 ? "fizz buzz" : "fizz";
  } else if (number % 3 === 0) {
    return "buzz";
  } else if (number % 2 === 0 && number % 3 === 0) {
    return "fizz buzz";
  } else {
    return "";
  }
};

module.exports = fizzBuzz;
