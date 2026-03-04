// plan: create an array that keeps track of all the numbers, adding the last two index numbers together for the requested number
// fibonacci sequence starts at 1 for this exercise

const fibonacci = function(num) {
  // pre define the first two numbers of the sequence, because you cannot find the 1st or 2nd number if there are not 2 numbers beforehand to calculate
  const array = [1, 1];

  if (+num === 0) {
    return 0;
  }

  if (+num < 0) {
    return "OOPS";
  }

  for (let i = 2; i < +num; i++) {
    array.push(array[i-1] + array[i-2])
  }
  
  return array[+num-1];
};

// Do not edit below this line
module.exports = fibonacci;
