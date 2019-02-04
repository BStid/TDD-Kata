const removeSNames = require("../src/removeSNames");

describe("remove names starting with S", () => {
  it("should remove all names starting with s", () => {
    const names = ["Scott", "Courtney", "Steve"];
    expect(removeSNames(names)).not.toContain("Scott");
  });
  it("should not remove other names", () => {
    const names = ["Scott", "Courtney", "Wes"];
    expect(removeSNames(names)).toContain("Courtney");
    expect(removeSNames(names)).toContain("Wes");
  });
  it("should account for case", () => {
    const names = ["Scott", "Courtney", "Wes", "scott"];
    expect(removeSNames(names)).not.toContain("Scott");
    expect(removeSNames(names)).not.toContain("scott");
  });
});
