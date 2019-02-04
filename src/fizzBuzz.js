const fizzBuzz = number => {
  //   if (number % 2 === 0) {
  //     return number % 3 === 0 ? "fizz buzz" : "fizz";
  //   } else if (number % 3 === 0) {
  //     return "buzz";
  //   } else {
  //     return "";
  //   }

  //Refactored Code. Clean, but harder to understand quickly. Look into other methods.
  return number % 2 === 0
    ? number % 3 === 0
      ? "fizz buzz"
      : "fizz"
    : number % 3 === 0
    ? "buzz"
    : "";
};

module.exports = fizzBuzz;
