const greeting = name => {
  if (Array.isArray(name) && name.length) {
    let length = name.length;
    return length === 1 ? greeting(name[0]) : handleMultipleNames(name);
  }
  return typeof name === "string" ? checkAllCaps(name) : "Hello, my friend.";
};

const handleMultipleNames = name => {
  let greetingSentence = "Hello,";
  let index = 0;
  let length = name.length;

  while (index < length) {
    if (length === 2) {
      return (greetingSentence += ` ${name[0]} and ${name[1]}.`);
    }
    index < length - 1
      ? (greetingSentence += ` ${name[index]},`)
      : (greetingSentence += ` and ${name[index]}.`);
    ++index;
  }
  return greetingSentence;
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
