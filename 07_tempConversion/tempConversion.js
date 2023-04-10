const convertToCelsius = function (farh) {
  // Run the formula for F to C convertion and use Math.round *10 then /10 to round to 1 decimal.
  return Math.round((farh - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celc) {
  return Math.round((celc * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
