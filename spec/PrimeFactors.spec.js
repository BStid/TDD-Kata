describe("PrimeFactors", () => {
  it("calculates the prime factors of an integer", () => {
    let primeFactors = require("../src/PrimeFactors");

    expect(primeFactors.of(1)).toEqual([]);
    expect(primeFactors.of(2)).toEqual([2]);
    expect(primeFactors.of(3)).toEqual([3]);
    expect(primeFactors.of(4)).toEqual([2, 2]);
    expect(primeFactors.of(5)).toEqual([5]);
    expect(primeFactors.of(6)).toEqual([2, 3]);
    expect(primeFactors.of(7)).toEqual([7]);
    expect(primeFactors.of(8)).toEqual([2, 2, 2]);
    expect(primeFactors.of(9)).toEqual([3, 3]);
  });
});
