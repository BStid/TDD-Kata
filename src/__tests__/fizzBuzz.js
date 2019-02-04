const fizzBuzz = require("../fizzBuzz");

describe("Given number returns fizz or buzz", () => {
  it("should return 'fizz' if divisible by 2, not 3", () => {
    expect(fizzBuzz(2)).toEqual("fizz");
    expect(fizzBuzz(4)).toEqual("fizz");
    expect(fizzBuzz(8)).toEqual("fizz");
  });
  it("should return 'buzz' if divisble by 3", () => {
    expect(fizzBuzz(3)).toEqual("buzz");
    expect(fizzBuzz(9)).toEqual("buzz");
    expect(fizzBuzz(21)).toEqual("buzz");
  });
  it("should return 'fizz buzz' if divisible by 2 and 3", () => {
    expect(fizzBuzz(2 * 3)).toEqual("fizz buzz");
    expect(fizzBuzz(12)).toEqual("fizz buzz");
    expect(fizzBuzz(2 * 3 * 7)).toEqual("fizz buzz");
  });
  it("should return empty string if not divisible by 2 or 3", () => {
    expect(fizzBuzz(1)).toEqual("");
    expect(fizzBuzz(7)).toEqual("");
    expect(fizzBuzz(11)).toEqual("");
  });
});
