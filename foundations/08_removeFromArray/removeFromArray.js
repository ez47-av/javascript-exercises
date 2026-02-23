// this one affects the original array
// const removeFromArray = function(array, ...removeItems) {
//   removeItems.forEach((item) => {
//     while (array.includes(item)) {
//       let i = array.indexOf(item);
//       array.splice(i, 1);
//     }
//   })

//   return array;
// };

const removeFromArray = function(array, ...removeItems) {
  return array.filter((arrItem) => !removeItems.includes(arrItem));
}

// Do not edit below this line
module.exports = removeFromArray;
