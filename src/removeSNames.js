const removeSNames = names => {
  let newNames = names;
  names.forEach(name => {
    if (name.toLowerCase().charAt(0) === "s") {
      const index = newNames.indexOf(name);
      newNames.splice(index, 1);
    }
  });
  return newNames;
};

module.exports = removeSNames;
