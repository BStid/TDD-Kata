const isPalindrome = require("../isPalindrome");
const longestPalindrome = require("../longestPalindrome");

describe("return the longest palindrome in a sentence", () => {
  it("should verify if a word is a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("computer")).toBe(false);
  });
  it("should return longest palindrome word in sentence", () => {
    const sentence = "radar is driven by  on the macecam track ";
    expect(longestPalindrome(sentence)).toBe("macecam");
  });
  it("should account for numbers", () => {
    const numSentence = "radar is driven by  on the 123454321 macecam track";
    expect(longestPalindrome(numSentence)).toBe("123454321");
  });
});
