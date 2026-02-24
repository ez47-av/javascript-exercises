// initialize the total variable that will be added on
// using a for loop, start the initial variable  at the minimum provided value, increments by 1
// add the initial variable to the total variable, stopping when greater than the maximum provided value



const sumAll = function(num1, num2) {
  let total, max;

  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR'
  }

  if (num1 < num2) {
    total = num1; //start from the lowest value
    max = num2;
  } else {
    total = num2;
    max = num1;
  }

  for (let i = total + 1; i <= max ; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
