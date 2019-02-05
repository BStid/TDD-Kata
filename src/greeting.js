const greeting = name => {
  return name
    ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}.`
    : "Hello, my friend.";
};

module.exports = greeting;
