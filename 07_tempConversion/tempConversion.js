const ftoc = function(temperature) {
  const tempConvt = (temperature - 32) / 9 * 5;
  return Math.round(tempConvt * 10) / 10;
};

const ctof = function(temperature) {
  const tempConvt =  temperature * 9 / 5 + 32;
  return Math.round(tempConvt * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
 