const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
};

const multiply = function(array) {
	let acumulator = 1;
  for (let index = 0; index < array.length; index++) {
    acumulator *= array[index];
  }
  return acumulator;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if ( a == 0 ) {
    return 1;
  }else {
    let acumulator = 1;
    for (let index = 1; index <= a; index++) {
      acumulator *= index;      
    }
    return acumulator;
  }
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
