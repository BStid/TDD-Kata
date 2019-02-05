const greeting = name => {
  let letter = 0;
  if (typeof name === "string") {
    while (name.charAt(letter) === name.charAt(letter).toUpperCase()) {
      if (letter === name.length) {
        return `HELLO, ${name}!`;
      }
      letter++;
    }
    return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}.`;
  }
  return "Hello, my friend.";
};

module.exports = greeting;

// return typeof name === "string"
//     ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}.`
//     : "Hello, my friend.";
