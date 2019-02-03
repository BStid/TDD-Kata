let PrimeFactors = function() {
  return;
};

PrimeFactors.prototype.of = function(n) {
  let result = [];

  for (let divisor = 2; divisor <= n; ++divisor) {
    for (; 0 === n % divisor; n /= divisor) {
      result.push(divisor);
    }
  }
  return result;
};
module.exports = new PrimeFactors();
