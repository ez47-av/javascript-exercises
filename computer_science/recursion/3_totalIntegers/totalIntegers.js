const totalIntegers = function(items, total = 0) {

  // if the items are instantly not an object or null, it returns undefined
  // the later, if (typeof item === 'object' && item !== null), should prevent this from ever running again
  if (typeof items !== 'object' || items === null) {
    return undefined;
  }

  // Object.values(items) converts it to an array so that it's handling the exact same data regardless if it was an object or array first
  // if the item is not a number, it reiterates again until it reaches one
  for (const item of Object.values(items)) {
    if (Number.isInteger(item)) {
      total++;
    } else if (typeof item === 'object' && item !== null) {
      // important to check for the type to avoid passing in strings, NaNs, etc, or else it returns undefined
      // passes it the total so that it's adding to the same total each time
      total = totalIntegers(item, total);
    }
  }

  return total;
};
  
// Do not edit below this line
module.exports = totalIntegers;
