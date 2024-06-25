const convertToCelsius = function (fDegrees) {
  let t = (fDegrees - 32) * (5 / 9);
  return Math.round(t * 1e1) / 1e1;
};

const convertToFahrenheit = function (cDegrees) {
  let t = cDegrees * (9 / 5) + 32;
  return Math.round(t * 1e1) / 1e1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
