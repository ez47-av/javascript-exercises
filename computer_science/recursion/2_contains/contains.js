const contains = function(obj, value) {
  if (Object.values(obj).includes(value)) {
    return true;
  }

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const found = contains(obj[key], value);
      if (found) return found;
    }
  }

  return false;
};
  
// Do not edit below this line
module.exports = contains;
