const greeting = name => {
  return typeof name === "string" ? checkAllCaps(name) : "Hello, my friend.";
};

const checkAllCaps = name => {
  let letter = 0;
  while (name.charAt(letter) === name.charAt(letter).toUpperCase()) {
    if (letter === name.length) {
      return `HELLO, ${name}!`;
    }
    letter++;
  }
  return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}.`;
};
module.exports = greeting;

//   return typeof name === "string"
//     ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}.`
//     : "Hello, my friend.";
