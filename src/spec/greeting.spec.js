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
  it("should handle one name in an array", () => {
    greetingToBe(["Alex"], "Hello, Alex.");
  });
  it("should handle an array of names", () => {
    greetingToBe(["Benjamin", "Grayson"], "Hello, Benjamin and Grayson.");
    greetingToBe(
      ["Benjamin", "Grayson", "Alex"],
      "Hello, Benjamin, Grayson, and Alex."
    );
    greetingToBe(
      ["Benjamin", "Grayson", "Alex", "David"],
      "Hello, Benjamin, Grayson, Alex, and David."
    );
  });
});
