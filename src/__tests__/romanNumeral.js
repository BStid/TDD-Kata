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
  it("should handle multiple Roman Numerals", () => {
    expect(romanNumeral("II")).toEqual(2);
    expect(romanNumeral("III")).toEqual(3);
    expect(romanNumeral("DC")).toEqual(600);
    expect(romanNumeral("ML")).toEqual(1050);
  });
  it("should be able to subtract if a smaller RN comes before a bigger one", () => {
    expect(romanNumeral("IV")).toEqual(4);
    expect(romanNumeral("IX")).toEqual(9);
    expect(romanNumeral("XIV")).toEqual(14);
    expect(romanNumeral("IL")).toEqual(49);
    expect(romanNumeral("XC")).toEqual(90);
    expect(romanNumeral("CXLIV")).toEqual(144);
    expect(romanNumeral("MCMXLIV")).toEqual(1944);
  });
});
