const permutations = function(array, n = array.length, output = []) {
  // if less than 1 the array passed was empty
  // slice is called or else it pushes a reference to the original array (which will break during heap's algorithm)
  if (n <= 1) {
    output.push(array.slice());
    return output;
  } else {
    for (let i = 0; i <= n - 1; i++) {
      // called first to ensure the first time in the array is added
      permutations(array, n - 1, output);

      // heap's algorithm
      if (n % 2 === 0) {
        const temp = array[i];
        array[i] = array[n - 1];
        array[n - 1] = temp;
      } else {
        const temp = array[0];
        array[0] = array[n - 1];
        array[n - 1] = temp;
      }
    }
  }

  return output;
};
  
// Do not edit below this line
module.exports = permutations;
