const romanNumeral = require("../romanNumeral");

describe("Roman Numeral to Number", () => {
  it("should convert Roman Numeral to a Number", () => {
    expect(romanNumeral("I")).toEqual(1);
    expect(romanNumeral("V")).toEqual(5);
    expect(romanNumeral("X")).toEqual(10);
    expect(romanNumeral("L")).toEqual(50);
    expect(romanNumeral("C")).toEqual(100);
    expect(romanNumeral("D")).toEqual(500);
    expect(romanNumeral("M")).toEqual(1000);
  });
});
