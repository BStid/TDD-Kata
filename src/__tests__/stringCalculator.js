const stringCalculator = require("../stringCalculator");

describe("String Calculator", () => {
  it("should return added sum", () => {
    expect(stringCalculator("2")).toEqual(2);
    expect(stringCalculator("2", "4")).toEqual(6);
  });
  it("should account for nothing passed", () => {
    expect(stringCalculator()).toBe(0);
  });
});
