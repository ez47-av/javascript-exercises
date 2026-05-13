
const pascal = function(n) {
  if (n === 1) return [1];

  // recursive call
  const prevRow = pascal(n - 1);
  const newRow = [];

  for (let i = 0; i <= prevRow.length; i++) {
    // take each number and add it with its rightmost neighbor
    const left = prevRow[i - 1] ?? 0;
    const right = prevRow[i] ?? 0;
    newRow.push(left + right)
  }

  return newRow;
};
  
// Do not edit below this line
module.exports = pascal;
