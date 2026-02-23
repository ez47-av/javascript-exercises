const removeFromArray = function(array, ...removeItems) {
  removeItems.forEach((item) => {
    while (array.includes(item)) {
      let i = array.indexOf(item);
      array.splice(i, 1);
    }
  })

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
