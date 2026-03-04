const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item, 1)
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  // start the sum at 1 so the factorial of 0 still equals 1
  // this means you can skip the first iteration of the factorial
  let sum = 1;

	for (let i = 2; i <= num; i++) {
    sum *= i;
  }

  return sum;
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
