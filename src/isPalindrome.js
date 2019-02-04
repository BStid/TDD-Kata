const isPalindrome = word => {
  let reversedWord = word
    .split("")
    .reverse()
    .join("");
  return reversedWord === word;
};
module.exports = isPalindrome;
