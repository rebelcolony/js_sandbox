// anonymous function
var magic = function() {
  return new Date();
};

// arrow function
var magic = () => {
  return new Date();
};

// if we are returning only 1 thing we can shorten it
const magic = () => new Date();
