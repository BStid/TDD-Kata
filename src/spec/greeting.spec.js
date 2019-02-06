const greeting = require("../greeting");

let greetingToBe = (recieved, expected) => {
  return expect(greeting(recieved)).toBe(expected);
};
let greetingToMatch = (recieved, expected) => {
  return expect(greeting(recieved)).toMatch(expected);
};
describe("Give a greeting", () => {
  it("should interpolate a name into a greeting", () => {
    greetingToMatch("Ben", "Ben");
    greetingToBe("Ben", "Hello, Ben.");
  });

  it("should account for lowercase names", () => {
    greetingToMatch("sarah", "Sarah");
    greetingToMatch("ben", "Ben");
    greetingToBe("mike", "Hello, Mike.");
  });

  it("should account for all caps", () => {
    greetingToBe("BEN", "HELLO, BEN!");
    greetingToBe("BEn", "Hello, BEn.");
    greetingToMatch("BEn", "BEn");
  });

  it("should account for null inputs", () => {
    expect(greeting()).toBe("Hello, my friend.");
    greetingToBe(null, "Hello, my friend.");
  });

  it("should account for number inputs", () => {
    greetingToBe(123, "Hello, my friend.");
  });
});

describe("Multiple Names", () => {
  it("should handle an array of names", () => {});
});
