const greeting = name => {
  return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}.`;
};

module.exports = greeting;
