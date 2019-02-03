let PrimeFactors = function() {
  return;
};

PrimeFactors.prototype.of = function(n) {
  let result = [];

  while (n > 1) {
    let divisor = 2;
    while (divisor <= n) {
      while (0 === n % divisor) {
        result.push(divisor);
        n /= divisor;
      }
      ++divisor;
    }
  }
  return result;
};
module.exports = new PrimeFactors();
