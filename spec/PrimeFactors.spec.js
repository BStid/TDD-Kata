describe("PrimeFactors", function() {
  it("calculates the prime factors of an integer", function() {
    let primeFactors = require("../src/PrimeFactors");

    expect(primeFactors.of(1)).toEqual([]);
    expect(primeFactors.of(2)).toEqual([2]);
  });
});
