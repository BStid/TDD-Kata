const greeting = require("../greeting");

describe("Give a greeting", () => {
  it("should interpolate a name into a greeting", () => {
    expect(greeting("Ben")).toMatch("Ben");
    expect(greeting("Ben")).toBe("Hello, Ben.");
  });
  it("should account for lowercase names", () => {
    expect(greeting("sarah")).toMatch("Sarah");
    expect(greeting("ben")).toMatch("Ben");
    expect(greeting("mike")).toBe("Hello, Mike.");
  });
});
