const greeting = name => {
  if (Array.isArray(name)) {
    let length = name.length;
    if (length === 1) {
      return `Hello, ${name[0]}.`;
    } else if (length === 2) {
      return `Hello, ${name[0]} and ${name[1]}.`;
    } else {
      let greetingSentence = "Hello,";
      let index = 0;
      while (index < length) {
        index < length - 1
          ? (greetingSentence += ` ${name[index]},`)
          : (greetingSentence += ` and ${name[index]}.`);
        ++index;
      }
      return greetingSentence;
    }
  }
  return typeof name === "string" ? checkAllCaps(name) : "Hello, my friend.";
};

const checkAllCaps = name => {
  let letterIndex = 0;
  let capitalizedFirstLetter = name.charAt(0).toUpperCase();

  while (name.charAt(letterIndex) === name.charAt(letterIndex).toUpperCase()) {
    if (letterIndex === name.length) {
      return `HELLO, ${name}!`;
    }
    ++letterIndex;
  }
  return `Hello, ${capitalizedFirstLetter + name.slice(1)}.`;
};

module.exports = greeting;
