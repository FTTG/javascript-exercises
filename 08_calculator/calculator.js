const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  const sumTotal = array.reduce((total, num) => {
    return total + num;
  }, 0);
  return sumTotal;
};

const multiply = function (array) {
  const product = array.reduce((total, current) => {
    return total * current;
  }, 1);
  return product;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
