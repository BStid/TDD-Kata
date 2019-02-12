//Find the longest palindrome in a sentence

const isPalindrome = require("./isPalindrome");

const longestPalindrome = sentence => {
  const arraySentence = sentence.split(" ");
  const palindromeWords = arraySentence.filter(word => {
    return isPalindrome(word);
  });
  palindromeWords.sort((a, b) => {
    return b.length - a.length;
  });

  return palindromeWords[0];
};

module.exports = longestPalindrome;
